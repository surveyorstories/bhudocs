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
      <main className="home_main">
        <section id="welcome">
          <WelcomeBlock />
        </section>
        <section id="faqs">
          <Accordion />
        </section>
      </main>
    </Layout>
  );
}
