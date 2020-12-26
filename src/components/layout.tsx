import React from 'react';
import '../styles/style.css';
import SocialWidget from './social-widget';
import Navigation from './navigation';
import HeadBanner from './head-banner';
import CopyrightFooter from './copyright-footer';
import ContactWidget from './contact-widget';

const Layout = ({ children }: any) => {
  return (
    <>
      <div className='wrap'>
        <header id='header'>
          <HeadBanner />
          <Navigation />
        </header>
        <main id='main'>
          <div className='container'>{children}</div>
        </main>
      </div>

      <div className='footer'>
        <footer id='footer'>
          <div className='container'>
            <div className='row'>
              <ContactWidget />
              <SocialWidget />
            </div>
          </div>
        </footer>

        <CopyrightFooter />
      </div>

      <script
        src='https://code.jquery.com/jquery-2.2.4.min.js'
        integrity='sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44='
        crossOrigin='anonymous'
      />
      <script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
        integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa'
        crossOrigin='anonymous'
      />
    </>
  );
};

export default Layout;
