import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
                   const { author } = data.site.siteMetadata
                   return (
                     <Image
                       fixed={data.avatar.childImageSharp.fixed}
                       alt={author}
                       style={{
                         marginBottom: 0,
                         minWidth: 50,
                         borderRadius: "100%",
                       }}
                       imgStyle={{
                         borderRadius: "50%",
                       }}
                     />
                   )
                 }}
    />
  )
}

export default Avatar