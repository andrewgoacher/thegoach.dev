import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const CopyrightFooter = () => {
  const data: Query = useStaticQuery(query);
  const author = data.site.siteMetadata.author;
  return (
    <footer id='underfooter'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 widget'></div>
          <div className='col-md-6 widget'>
            <div className='widget-body'>
              <p className='text-right'>
                Copyright &copy; 2020, {author.name}
                <br />
                Design:{' '}
                <a href='http://www.gettemplate.com' rel='designer'>
                  Initio by GetTemplate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const query = graphql`
  query CopyrightFooterQuery {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`;

interface Author {
  name: string;
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

export default CopyrightFooter;
