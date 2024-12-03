import React from 'react';
import Head from '@docusaurus/Head';
import NotFound from '@theme-original/NotFound';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'; // Import the Docusaurus Link component
import '../css/404.css'; // Custom CSS import for additional styles

// export default function NotFoundWrapper(props) {
//   return (
//     <>
//       <NotFound {...props} />
//     </>
//   );
// }


export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout title="404 - Page Not Found" description="Oops! You seem to have taken a wrong turn!">
        <main className="container margin-vert--xl not-found-page">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Uh-oh! You’ve taken a wrong turn!</h2>
            <p className="not-found-message">
              Looks like you’ve stumbled upon a page that doesn’t exist. Don’t worry, you’re not lost in space—just a bit off the beaten path!
            </p>
            <div className="not-found-image">
              {/* Uncomment and ensure the path to your image is correct */}
              {/* <img src="./img/404.png" alt="Astronaut Lost in Space" /> */}
            </div>
            <Link to="/" className="not-found-button">
              Take me home, please!
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}