import React from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import GitHubReleases from "../components/github_releases";

function App() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` Bhukamatha`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main className="home_main">
        <section id="Github_Releases" className="github_releases">
          <div className="releases_container">
            <GitHubReleases
              owner="opengisch"
              repo="QField"
              token="your_access_token"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;

// --- for markdown
// id: releases
// title: GitHub Releases
// ---

// import GitHubReleases from "../components/releases";

// <GitHubReleases owner="github_username" repo="repository_name" token="your_access_token" />
