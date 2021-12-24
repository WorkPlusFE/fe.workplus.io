import React from 'react';
import clsx from 'clsx';
import { orgs } from '../data/github';
import GithubOrg from './Org';
import SessionTitle from './SessionTitle';
import styles from './Github.module.css';

const GithubOrgs = () => (
  <div className="container margin-bottom--lg" style={{ marginTop: '-16px' }} >
    <SessionTitle title="Github 组织" />
    <div className="row">
      {
        orgs.map((item) => (
          <div className="col col--4" key={item.title}>
            <GithubOrg {...item}/>
          </div>
        ))
      }
    </div>
  </div>
);

export default GithubOrgs;