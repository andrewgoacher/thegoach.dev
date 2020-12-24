import React from 'react';
import { Link } from 'gatsby';
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

// import {rhythm, scale} from '../utils/typography';
//
// interface LayoutProps {
//   location: any;
//   title: string;
//   children: JSX.Element | JSX.Element[] | string;
// }
//
// const Layout = ({ location, title, children }: LayoutProps) => {
//   const rootPath = '/'; //`${__PATH_PREFIX__}/`
//   let header;
//
//   if (location.pathname === rootPath) {
//     header = (
//       <h1
//         style={{
//           ...scale(1.5),
//           marginBottom: rhythm(1.5),
//           marginTop: 0,
//         }}
//       >
//         <Link
//           style={{
//             boxShadow: `none`,
//             color: `inherit`,
//           }}
//           to={`/`}
//         >
//           {title}
//         </Link>
//       </h1>
//     );
//   } else {
//     header = (
//       <h3
//         style={{
//           fontFamily: `Montserrat, sans-serif`,
//           marginTop: 0,
//         }}
//       >
//         <Link
//           style={{
//             boxShadow: `none`,
//             color: `inherit`,
//           }}
//           to={`/`}
//         >
//           {title}
//         </Link>
//       </h3>
//     );
//   }
//   return (
//     <div
//       style={{
//         marginLeft: `auto`,
//         marginRight: `auto`,
//         maxWidth: rhythm(24),
//         padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//       }}
//     >
//       <header>{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href='https://www.gatsbyjs.org'>Gatsby</a>
//       </footer>
//     </div>
//   );
// };

export default Layout;