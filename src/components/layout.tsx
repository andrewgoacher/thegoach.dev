import React from 'react';
import { Link } from 'gatsby';
import '../styles/style.css';

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className='wrap'>
        <header id='header'>
          <div id='head' className='parallax' parallax-speed='2'>
            <h1 id='logo' className='text-center'>
              <img className='img-circle' src='/images/me.jpg' alt='' />
              <span className='title'>Andrew Goacher</span>
              <span className='tagline'>
                Software Developer
                <br />
                needs a website as his friends don't listen any more.
              </span>
            </h1>
          </div>
          <nav className='navbar navbar-default '>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#target'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
              </div>
              <div className='collapse navbar-collapse' id='target'>
                <ul className='nav navbar-nav'>
                  <li className='active'>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/about'>About</a>
                  </li>
                  <li>
                    <a href='/blog'>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main id='main'>
          <div className='container'>{children}</div>
        </main>
      </div>

      <div className='footer'>
        <footer id='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 widget'>
                <h3 className='widget-title'>Contact</h3>
                <div className='widget-body'>
                  <p>
                    <a href='mailto:andrewgoacher@outlook.com'>
                      andrewgoacher@outlook.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>

              <div className='col-md-3 widget'>
                <h3 className='widget-title'>Follow me</h3>
                <div className='widget-body'>
                  <p className='follow-me-icons'>
                    <a href='https://twitter.com/the_goach'>
                      <i className='fa fa-twitter fa-2'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/andrewgoacher/'>
                      <i className='fa fa-linkedin fa-2'></i>
                    </a>
                    <a href='https://github.com/andrewgoacher/'>
                      <i className='fa fa-github fa-2'></i>
                    </a>
                    <a href='https://gitlab.com/andrewgoacher'>
                      <i className='fa fa-gitlab fa-2'></i>
                    </a>
                    <a href='https://bitbucket.org/%7B59b1a85d-9327-4969-bdc4-689405ed3023%7D/'>
                      <i className='fa fa-bitbucket fa-2'></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer id='underfooter'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 widget'></div>
              <div className='col-md-6 widget'>
                <div className='widget-body'>
                  <p className='text-right'>
                    Copyright &copy; 2020, Andrew Goacher
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
      </div>

      <script
        src='https://code.jquery.com/jquery-2.2.4.min.js'
        integrity='sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44='
        crossOrigin='anonymous'
      ></script>
      <script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
        integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa'
        crossOrigin='anonymous'
      ></script>
    </div>
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
