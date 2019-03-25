import React from 'react';
import { StaticQuery} from "gatsby";
import Image from 'gatsby-image';
// import { rhythm } from "../utils/typography"

const avatarQuery = graphql`
  query AvatarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/"}){
          childImageSharp {
              fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
      site {
          siteMetadata {
              author
          }
      }
  }
  `

const Avatar = () => {
  return (
    <StaticQuery query={avatarQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              // marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: '100%'
            }}
            imgStyle={{
              borderRadius: '50%'
            }}
          />
        );
      }}
    />
  );
}

export default Avatar;