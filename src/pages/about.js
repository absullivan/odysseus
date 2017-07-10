import React from "react"
import { rhythm } from "../utils/typography"

class About extends React.Component {
  render() {
    return (
      <div
        css={{
          padding: rhythm(3 / 4),
        }}
      >
        <h1>About ABSgram</h1>
        <p>
          ABSgram is a fork of Gatsbygram, which is both an Instagram clone and an example of
          {` `}
          <a target="_blank" href="https://github.com/gatsbyjs/gatsby">
            Gatsby
          </a>
          .
        </p>
        <p>
          <a href="https://www.gatsbyjs.org/blog/gatsbygram-case-study/">
            Read a case study on how Gatsbygram was built
          </a>
        </p>
      </div>
    )
  }
}

export default About
