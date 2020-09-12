import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface TaglineProps {
  tagline: string;
}

const Tagline = ({ tagline }: TaglineProps) => {
  const str = tagline.split('\n');
  const parts = str.map((s: string, i: number) => {
    if (i === 0) {
      return <>{s}</>;
    }
    return (
      <>
        <br />
        {s}
      </>
    );
  });

  return <span className={'tagline'}>{parts}</span>;
};

const HeadBanner = () => {
  const data: Query = useStaticQuery(query);
  const author = data.site.siteMetadata.author;

  return (
    <div id='head' className='parallax' parallax-speed='2'>
      <h1 id='logo' className='text-center'>
        <img className='img-circle' src='/images/me.jpg' alt='' />
        <span className='title'>{author.name}</span>
        <Tagline tagline={author.summary} />
      </h1>
    </div>
  );
};

const query = graphql`
  query BannerQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
  }
`;

interface Author {
  name: string;
  summary: string;
}

interface SiteMetadata {
  author: Author;
}

interface Site {
  siteMetadata: SiteMetadata;
}

interface Query {
  site: Site;
}

export default HeadBanner;
