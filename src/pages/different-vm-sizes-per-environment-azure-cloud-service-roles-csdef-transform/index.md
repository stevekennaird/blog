---
title: Having different VM sizes per environment for Azure Cloud Service roles
date: "2016-11-21T09:00:00.000Z"
---

I'm working on a project running on Azure, with the project being deployed as a Cloud Service.

In this cloud service is:

* Two web roles
* One worker role

One little annoyance I've had with Azure Cloud Services for a while was the lack of a(n easy) way to run different VM sizes for the roles for different environments, as I want to save money when my test environments are running.

In production, I want a more beefy VM to handle a higher number of concurrent users than in test environments. Sure you can scale the number of instances per role, but I wanted to change instance _size_.

I wanted to have the following VM sizes for the roles...

Production:

* Web Role 1 = Extra Large
* Web Role 2 = Medium
* Worker Role = Small

Test Environments (e.g. UAT, RC etc):

* Web Role 1 = Medium
* Web Role 2 = Small
* Worker Role = ExtraSmall

I found [this page](http://fabriccontroller.net/apply-xdt-transforms-to-your-servicedefinition-csdef-file/) after some Googling, and there was clearly some hope.

After following the instructions in the post above (and a related post I found [here](http://robhead89.blogspot.co.uk/2014/01/azure-transforming-csdef-file.html)), it wasn't working for me. According to the author of that post, this approach was still working with Azure SDK v2.9, which is the same version I'm running - so it _should_ work.

Not knowing MSBuild amazingly well, it took me a while to find an alternative approach. I ended up with my cloud service .ccproj file looking like this:

```
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
 ... (removed the non-interesting parts for brevity) ...
  <PropertyGroup Condition=" '$(Configuration)' == 'Production' ">
    <OutputPath>bin\Production\</OutputPath>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' == 'UAT' ">
    <OutputPath>bin\UAT\</OutputPath>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' == 'ReleaseCandidate' ">
    <OutputPath>bin\ReleaseCandidate\</OutputPath>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' == 'UAT2' ">
    <OutputPath>bin\UAT2\</OutputPath>
  </PropertyGroup>
  <!-- Define extra Service Definition files - to allow us to have different VM sizes in different environments (http://fabriccontroller.net/apply-xdt-transforms-to-your-servicedefinition-csdef-file/). -->
  <ItemGroup>
    <Content Include="ServiceDefinition.UAT.csdef" />
    <Content Include="ServiceDefinition.UAT2.csdef" />
    <Content Include="ServiceDefinition.ReleaseCandidate.csdef" />
  </ItemGroup>
  <PropertyGroup>
	<ServiceDefinitionTransform>ServiceDefinition.$(Configuration).csdef</ServiceDefinitionTransform>
    <TransformRunnerExecutable>$(MSBuildProjectDirectory)\..\packages\WebConfigTransformRunner.1.0.0.1\Tools\WebConfigTransformRunner.exe</TransformRunnerExecutable>
  </PropertyGroup>
  <Target Name="TransformCsdef" AfterTargets="CopyServiceModel" Condition="Exists($(ServiceDefinitionTransform)) And '$(Configuration)' != 'Production'">
	<Message Text="Running CSDEF transforms (TargetProfile=$(Configuration))" Importance="High" />
	<Exec Command="&quot;$(TransformRunnerExecutable)&quot; @(TargetServiceDefinition) $(ServiceDefinitionTransform) @(TargetServiceDefinition)" />
  </Target>
  <Import Project="$(CloudExtensionsDir)Microsoft.WindowsAzure.targets" />
</Project>
```

Notice that it targets the `CopyServiceModel` Target, so runs after the ServiceDefinition file has been copied to the output. It then runs the XML transform, and you end up with the .csdef file in the desired state with the `vmsize` attributes changed depending on your environment.

Here's an example of one of the XML transform files:

```
<?xml version="1.0"?>
<ServiceDefinition  xmlns="http://schemas.microsoft.com/ServiceHosting/2008/10/ServiceDefinition" xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform" xdt:Locator="Condition(@name!='' and @schemaVersion!='')">  
  <WebRole name="MyProj.Admin.UI" vmsize="Small" xdt:Transform="SetAttributes" xdt:Locator="Match(name)"></WebRole>
  <WebRole name="MyProj.Frontend.UI" vmsize="Medium" xdt:Transform="SetAttributes" xdt:Locator="Match(name)"></WebRole>
  <WorkerRole name="MyProj.WorkerRole" vmsize="ExtraSmall" xdt:Transform="SetAttributes" xdt:Locator="Match(name)"></WorkerRole>
</ServiceDefinition>
```

Hopefully this helps somebody else who stumbles on those posts, and experiences the same problems that I did.

Thanks to [Rob Head](http://robhead89.blogspot.co.uk/) for his original post and letting me know it's still possible with Azure SDK v2.9!
