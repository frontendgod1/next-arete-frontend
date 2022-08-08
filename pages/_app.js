// add bootstrap css
import AOS from "aos";
import React, { useEffect } from "react";
import Router, {withRouter} from 'next/router';
import Head from "next/head";
import GA4React from 'ga-4-react';

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/site.scss'
import { ParallaxProvider } from 'react-scroll-parallax';
import "../css/apply-frog-lacrosse.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class Tracking extends React.Component {
  componentDidMount () {
      if (!window.GA_INITIALIZED) {

        const ga4react = new GA4React(
        'G-9JH7SWT5JX',
        { /* ga custom config, optional */ },
        [ /* additional code, optional */ ],
        5000 ,

        );

        ga4react.initialize().then((ga4) => {
          window.ga4 = ga4;
          ga4.pageview(window.location.pathname + window.location.search)
        },(err) => {
          console.error(err)
        })
        window.GA_INITIALIZED = true
      }
      Router.onRouteChangeComplete = url => {
        window.ga4.pageview(url);
        }
  };
  render () {
      return null;
  }
}

const TrackingCode = withRouter(Tracking);


function MyApp({ Component, pageProps }) {


  useEffect(() => {
  AOS.init({
    mirror: true,
    anchorPlacement: 'top-bottom',
    offset: -200
  });
  window.aos = AOS;
}, []);

return (
<>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <meta property="og:image" content="/images/hero.jpg" />

    <link href="https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>

   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
   <link rel="manifest" href="/site.webmanifest"/>
   <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MRB83FT');`}} />

</Head>
<ParallaxProvider>
    <Component {...pageProps} />
        
</ParallaxProvider>
    <TrackingCode/>
    <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRB83FT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

</>
);
}
export default MyApp;
