import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  const data: Query = useStaticQuery(query);
  const social = data.site.siteMetadata.social;
  return (
    <Layout>
      <SEO title={'About'} />
      <div className='row topspace'>
        <div className='col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 maincontent'>
          <h2 className='section-title'>
            <span>Whoami</span>
          </h2>
          <h4>Hi I'm Andrew</h4>

          <p>
            I live at home with 2 small Senegal parrots. They come first in this
            because they're more important than programming. They're called
            Merlin and Charlie and are disproportionately loud given their size.
            My friends hear them through discord all the time and confirm they
            are indeed pains in my arse. They like to chime in on meetings so I
            live on mute.
          </p>

          <p>
            If you just want to know about me professionally, my LinkedIn
            profile is <a href={social.linkedin}>here</a> or just take a look at
            my <a href={social.twitter}>twitter page</a>.
          </p>

          <p>
            I've been programming for a while now, at least 10 whole years. I
            still feel way out of my depth, all the time. I first attempted to
            learn around 2003 when being 13 felt a good age to become a hacker.
            It turns out, that navigating the wars between C and C++, and the
            entire C communities racism to languages like Java and C# was a
            little too much for me back then. I decided to wait until I went to
            university, where I chose to study Computer Games Programming.
          </p>

          <p>The rest is kind of history (ish).</p>

          <p>
            These days I spend a lot of time trying to figure out what kind of
            developer I actually am. I'm a big fan of TDD and pragmatic
            approaches but I'm trying to find a balance between delivery and
            longevity.
          </p>

          <p>
            At work, I tend to use .NET languages (well, if we're being
            specific, I use C#) and javascript technologies most of the time and
            you wouldn't be too far off if you called me a web developer.
          </p>

          <p>
            At home, I play around with a lot of different technologies. This
            website is written in HTML (using Tera templating) and Rust. I like
            F#, C# (with MonoGame most of the time) and anything else that
            tickles my fancy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        social {
          linkedin
          twitter
        }
      }
    }
  }
`;

interface Social {
  twitter: string;
  linkedin: string;
}

interface SiteMetadata {
  social: Social;
}

interface Site {
  siteMetadata: SiteMetadata;
}

interface Query {
  site: Site;
}

export default About;
