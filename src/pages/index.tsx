import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = () => {
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
    </Layout>
  );
};

export default Index;
