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
  <h2>Key Features of Bhukamtha</h2>
  <div className="feature-cards">
    <FeatureCard
      title="Earthquake Hazard Assessment"
      description="Assess seismic hazards using various methods and parameters."
      icon={<i className="fa fa-globe"></i>} // Replace with appropriate icon class
    />
    <FeatureCard
      title="Vulnerability Analysis"
      description="Analyze building vulnerability and identify potential damage."
      icon={<i className="fa fa-building"></i>}
    />
    <FeatureCard
      title="Risk Assessment"
      description="Evaluate the overall risk to communities and infrastructure."
      icon={<i className="fa fa-exclamation-triangle"></i>}
    />
    {/* Add more features as needed */}
  </div>
</section>
      </main>
    </Layout>
  );
}
