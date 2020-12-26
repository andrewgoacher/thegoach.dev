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
            Hi I'm Andrew and I'm a full stack (ish) developer.
          </p>
          <p>
            I've been a hilariously blogless blogger for a while now and I've
            decided it's time to be honest to myself and give up on that
            endeavour. Like a lot of developers, I still like building small
            things or tinkering at home. I intend to find things of substance to
            talk about and add them here as and when I am comfortable doing so.
          </p>
          <p>
            My repositories and LinkedIn profile are below and I'm fairly
            responsive on social platforms.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
