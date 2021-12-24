import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Post from '../components/Post';
import GithubOrgs from '../components/GithubOrgs';
import GithubRepos from '../components/GithubRepos';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h3 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h3>
        <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
        {/* <p>奋斗精神 <strong>·</strong> 工匠精神 <strong>·</strong> 服务精神</p> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Post />
        <GithubRepos />
        <GithubOrgs />
      </main>
    </Layout>
  );
}
