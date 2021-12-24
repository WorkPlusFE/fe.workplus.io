import React from 'react';
import clsx from 'clsx';
import styles from './Org.css';

export default function GithubOrg(props) {
  return (
    <div className="github-org">
      <a className="github-org-card" href={props.link} target="_blank">
        <div className="github-org-card__image">
          <img src={props.avatar} alt={props.title} />
        </div>
        <div className="github-org-card__content">
          <h3>{props.title}</h3>
          <p>{props.subTitle}</p>
        </div>
      </a>
    </div>
  )
};
