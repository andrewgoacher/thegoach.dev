import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ContactWidget = () => {
  const data: Query = useStaticQuery(query);
  const author = data.site.siteMetadata.author;
  return (
    <div className='col-md-3 widget'>
      <h3 className='widget-title'>Contact</h3>
      <div className='widget-body'>
        <p>
          <a href={`mailto:${author.contact}`}>{author.contact}</a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ContactWidget;

const query = graphql`
  query ContactWidgetQuery {
    site {
      siteMetadata {
        author {
          contact
        }
      }
    }
  }
`;

interface Author {
  contact: string;
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
