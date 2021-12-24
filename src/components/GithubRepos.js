import React from 'react';
import clsx from 'clsx';
import SessionTitle from './SessionTitle';
import styles from './Github.module.css';

const GithubRepos = () => (
  <div className="container" style={{ marginTop: '-16px' }}>
    <SessionTitle title="团队项目" />
    <div className={clsx('row')}>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/WorkPlusFE/js-sdk">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=WorkPlusFE&repo=js-sdk" />
        </a>
      </div>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/WorkPlusFE/cli">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=WorkPlusFE&repo=cli" />
        </a>
      </div>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/WorkPlusFE/open.workplus.io">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=WorkPlusFE&repo=open.workplus.io" />
        </a>
      </div>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/vitue-scaffold/vitue-cli">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=vitue-scaffold&repo=vitue-cli" />
        </a>
      </div>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/vitue-scaffold/vitue-mobile">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=vitue-scaffold&repo=vitue-mobile" />
        </a>
      </div>
      <div className={clsx(styles.PaddingBottom, 'col col--4')}>
        <a href="https://github.com/vitue-scaffold/vitue-admin">
          <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=vitue-scaffold&repo=vitue-admin" />
        </a>
      </div>
    </div>
  </div>
);

export default GithubRepos;
