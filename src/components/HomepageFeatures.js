import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '统一脚手架',
    Svg: require('../../static/img/scaffold.svg').default,
    description: (
      <>
        通过 <a className={styles.colorWhite} title="Vitue" href="https://github.com/vitue-scaffold">Vitue</a> 来统一管理所有项目模版及创建。目前前端主要技术栈为：Vue3.0、Vite、TypeScript 及 SASS 等。
      </>
    ),
  },
  {
    title: '规范开发过程',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        借助 ESlint、Stylelint 及 commitlint 等工具，全方位保障项目开发过程的规范和一致性。同时通过 Jenkins、Sentry 等工具，保证项目的线上稳定性。 
      </>
    ),
  },
  {
    title: '每月内部分享',
    Svg: require('../../static/img/share.svg').default,
    description: (
      <>
       每月举行一次内部分享会，内容主要围绕前端前沿技术的探讨及项目经验的分享，并会以文章的形式发布到团队<a className={styles.colorWhite}  title="团队博客" href="https://fe-blog.workplus.oio">博客</a>上。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
