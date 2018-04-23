---
title: My web development toolbox
date: "2015-07-05T09:00:00.000Z"
---

N.B. Things move fast, so this will become out of date fairly quickly!

We do a lot of client-side work at Purple Cubed, all from within Visual Studio as most of the server-side stuff we do is ASP.Net.

Over the years I've built up a list of useful tools - each item on the list below could potentially make your life easier, so it's worth a look.

##[Visual Studio](https://www.visualstudio.com/)
A great IDE that keeps getting better - whether you're creating an ASP.Net website in Web Forms or whatever JavaScript MV\* framework you prefer, a NodeJS app, or [something for iOS, Android etc in C#](https://www.visualstudio.com/en-us/features/xamarin-vs.aspx), VS has got you covered. Looking forward to the release of the latest version, [VS2015 on 20th July](http://blogs.windows.com/buildingapps/2015/06/29/release-dates-and-compatibility-visual-studio-2015-and-windows-10-sdk/).

##[ReSharper](https://www.jetbrains.com/resharper/)
Awesome tool that helps you write better code, quicker. Great ROI for the licence fee. Once you've used it, you won't be able to live without it. That said, apparently VS2015 will come with some of ReSharper's best features already built in.

##[RayGun](http://raygun.io)
Error logging done right, lovely UI and grouping of issues so you can see what your most common exceptions are. Well worth the money, easy to set up, an invaluable tool.

##[BrowserStack](https://www.browserstack.com/)
We tried messing around with virtual machines and images for running IE7 & 8, but it's not worth the time/hassle. Just go for Browserstack! Plus it's much more than just IE, you can test against any url (even localhost!) across a range of mobile devices too.

##[GitHub](http://github.com)
The main place right now to host your source code, and get involved with developer communities.

##[Slow Cheetah](https://visualstudiogallery.msdn.microsoft.com/69023d00-a4f9-4a34-a6cd-7e854ba318b5)
You'd think this would be built in to Visual Studio, previewing xml-based config file transforms (e.g. see what changes your web.release.config applies over the base web.config).

##[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)
Debugging API calls returning JSON in Chrome? Turn that text into a JSON tree, much nicer! A little gem.

##[Winmerge](http://winmerge.org/?lang=en)
The best diff'ing program I've ever used

##[GitHub for Windows](https://windows.github.com/)
Nice program, decent UI, but I tend to use Git from within Visual Studio using [Git Extensions](https://visualstudiogallery.msdn.microsoft.com/8f594baa-e44e-4114-8381-e175ace0fe97). Looking forward to using what [Github bring to Visual Studio 2015](http://blogs.msdn.com/b/visualstudio/archive/2015/04/30/announcing-the-github-extension-for-visual-studio.aspx).

##[TeamCity](https://www.jetbrains.com/teamcity/)
Brought to you by the same company who brought your ReSharper, TeamCity is a Continuous Integration platform. We use it for running builds and tests when we push commits to production, UAT or release candidate branches. And then use PowerShell to deploy to Azure! We also abuse it slightly, and use it to delete our test environments overnight, and deploy before we get into the office in the morning!

##[Notepad++](https://notepad-plus-plus.org/)
Saved me time a lot of times. Generally only use it for it's macro support, used many times for generating multiple SQL statements from CSV data!

##[Paint.net](http://www.getpaint.net/index.html)
If I need anything sophisticated done with an image, I'll pass it on to our designer. For 99% of tasks, Paint.net does the job.

##[Fiddler](http://www.telerik.com/fiddler)
Renowned web debugging proxy - check out exactly what's happening with those requests

##[Blitz.io](https://www.blitz.io/)
Load testing in the cloud, nice n easy!

##[Mailgun](http://www.mailgun.com/)
Does a simple job well - sending email. Backed by Rackspace, and better priced (for our scenario, at least) than SendGrid.

##[MarkdownPad2](http://markdownpad.com/)
You wouldn't believe how difficult it was to find a simple but high quality Markdown text application for Windows! I hear [Code](https://code.visualstudio.com/) does a good job with Markdown too, but that does so much more on top.

##[Slack](https://slack.com/)
Ok, so it's not specifically a dev tool, but it's a communication tool which makes collaboration easier. I much prefer using this to emails and Lync. Our semi-remote team do our morning 'stand ups' via Slack now, and find it to be less disruptive than Lync. [This slideshow](http://slides.com/nomaanahgharian/slack) does a better job than I can of selling you the benefits!

So ok, my list is not in the same class as [Scott Hanselman's ultimate tools list](http://www.hanselman.com/blog/ScottHanselmans2014UltimateDeveloperAndPowerUsersToolListForWindows.aspx), if you've not found anything here, maybe head there instead!
