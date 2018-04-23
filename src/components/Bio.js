import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Steve Kennaird`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Steve Kennaird</strong>, UK-based developer and
          Technical Director interested in .Net and NodeJS backends and all
          sorts of frontends.
          <br />
          <br />
          You can{' '}
          <a href="https://twitter.com/stevekennaird">
            follow me on Twitter
          </a>{' '}
          if you like!
        </p>
      </div>
    )
  }
}

export default Bio
