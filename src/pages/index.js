import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HomePage from "../components/home";
import Accordion from "../components/faq";
import WelcomeBlock from "../components/intro_content";
import FeatureCard from '../components/featurescard';
// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {/* {siteConfig.title} */} Bhukamatha
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Bhukamatha Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` Bhukamatha`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <div className="scroll"></div>
      <main className="home_main">
        <section id="welcome">
          <WelcomeBlock />
        </section>
        <section id="faqs">
          <Accordion />
        </section>
        <section className="feature-section">
  {/* <h2>Key Features of Bhukamtha</h2>
  <div className="features-grid">
  <FeatureCard 
    title="Quick Setup"
    description="Get up and running in no time with our easy-to-follow setup guide."
    icon="🚀"
  />
  <FeatureCard 
    title="High Performance"
    description="Optimized for fast and smooth operation under all conditions."
    icon="⚡"
  />
  <FeatureCard 
    title="Highly Customizable"
    description="Tailor the system to your exact needs with a wide range of settings."
    icon="⚙️"
  />
  <FeatureCard 
    title="Robust Security"
    description="Built with the latest security features to keep your data safe."
    icon="🔒"
  />
</div> */}
</section>
      </main>
    </Layout>
  );
}
