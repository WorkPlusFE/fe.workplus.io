import React from 'react';
import clsx from 'clsx';
import styles from './LastPost.css';

export default function LastPost() {
  return (
    <div className="last-post">
      <a className="last-post-card" href="https://fe-blog.workplus.io/xss" target="_blank">
        <div className="last-post-card__image">
          <img src="https://fe-blog.workplus.io/images/2021/11/xss.webp" alt="前端 XSS 攻击与防御" />
        </div>
        <div className="last-post-card__content">
          <h4>前端 XSS 攻击与防御</h4>
          <p><auth>叶德权</auth> / <time>2021-11-19</time></p>
        </div>
      </a>
    </div>
  )
};
