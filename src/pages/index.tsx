import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface RecentPostProps {
  node: Node;
}
const RecentPost = ({ node }: RecentPostProps) => {
  return (
    <div className='col-sm-6 col-md-3'>
      <h3 className='text-center'>{node.frontmatter.title}</h3>
      <p>Posted: ({node.frontmatter.date})</p>
      <p>{node.frontmatter.description}</p>
      <p className='text-center'>
        <a href={`/blog/${node.fields.slug}`} className='btn btn-action'>
          Read more
        </a>
      </p>
    </div>
  );
};

const Index = ({ data }: any) => {
  const nodes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title={'Home'} />
      <div className='row section topspace'>
        <div className='col-md-12'>
          <p className='lead text-center text-muted'>
            One day, there will be about 6 blog posts on here and I'll consider
            myself a successful <a href='/blog'>blogger</a>.<br />
            I'm a programmer, you can find out more about me{' '}
            <a href='/about'>here</a>.
          </p>
        </div>
      </div>
      <div className='row section featured topspace'>
        <h2 className='section-title'>
          <span>Recent Posts</span>
        </h2>
        <div className='row'>
          {nodes.map((n: Post, i: number) => {
            return <RecentPost node={n.node} key={i} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
interface Fields {
  slug: string;
}
interface Frontmatter {
  date: string;
  title: string;
  description: string;
}
interface Node {
  fields: Fields;
  frontmatter: Frontmatter;
}
interface Post {
  node: Node;
}
interface Posts {
  edges: Post[];
}
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

export default Index;
