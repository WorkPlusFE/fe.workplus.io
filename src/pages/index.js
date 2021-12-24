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

function Footer() {
  return (
    <footer className="footer text--center">
      <div className="container container--fluid">
        <div className="footer__links">
          <a className="footer__link-item" href="https://workplus.io">
            公司官网
          </a>
          <span className="footer__link-separator">·</span>
          <a className="footer__link-item" href="https://open.workplus.io">
            开放平台
          </a>
          <span className="footer__link-separator">·</span>
          <a className="footer__link-item" href="https://lite.workplus.io">
            WorkPlus Lite
          </a>
          <span className="footer__link-separator">·</span>
          <a className="footer__link-item" href="https://kunlun.workplus.io">
            KunLun
          </a>
        </div>
        <div>©2015-{new Date().getFullYear()} 深圳恒拓高科信息技术有限公司 版权所有</div>
      </div>
    </footer>
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
      <Footer />
    </Layout>
  );
}
