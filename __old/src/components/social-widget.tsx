import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SocialLinkProp {
  name: string;
  social: Social;
}

const SocialLink = ({ name, social }: SocialLinkProp) => {
  const url = (social as any)[name];
  return (
    <a href={url}>
      <i className={`fa fa-${name} fa-2`} />
    </a>
  );
};

const SocialWidget = () => {
  const data: SocialQuery = useStaticQuery(query);

  const social = data.site.siteMetadata.social;

  return (
    <div className='col-md-3 widget'>
      <h3 className='widget-title'>Follow me</h3>
      <div className='widget-body'>
        <p className='follow-me-icons'>
          <SocialLink name='twitter' social={social} />
          <SocialLink name='linkedin' social={social} />
          <SocialLink name='github' social={social} />
          <SocialLink name='gitlab' social={social} />
          <SocialLink name='bitbucket' social={social} />
        </p>
      </div>
    </div>
  );
};

const query = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          bitbucket
          linkedin
          github
          gitlab
        }
      }
    }
  }
`;

interface Social {
  twitter: string;
  linkedin: string;
  github: string;
  gitlab: string;
  bitbucket: string;
}

interface SiteMetaData {
  social: Social;
}

interface Site {
  siteMetadata: SiteMetaData;
}

interface SocialQuery {
  site: Site;
}

export default SocialWidget;
