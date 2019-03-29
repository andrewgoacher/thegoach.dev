import React from 'react';
import { StaticQuery} from "gatsby";
import Image from 'gatsby-image';
import { graphql} from "gatsby"

const names = ["charlie", "merlin", "bigfoot"]

const avatarQuery = graphql`
    query {
        charlie: file(absolutePath: {regex: "/charlie.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        merlin: file(absolutePath: {regex: "/merlin.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        bigfoot: file(absolutePath: {regex: "/bigfoot.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

const MultiAvatar = ({index}) => {

  return (
    <StaticQuery query={avatarQuery}
                 render={data => {
                   return (
                     <Image
                       fixed={data.avatar.childImageSharp.fixed}
                       alt={names[index]}
                       style={{
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

export default MultiAvatar;