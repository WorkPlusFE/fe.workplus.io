import React from 'react';
import clsx from 'clsx';
import styles from './Post.css';
import { post } from '../data/post';
import SessionTitle from './SessionTitle';

function PostItem(props) {
  return (
    <a className="card" href={props.link} title={props.title} target="_blank">
      <div className="card__image">
        <img
          src={props.pic}
          alt={props.title}
          title={props.title}
        />
      </div>
      <div className="card__body">
        <h3>{props.title}</h3>
        <small>
        {props.auth} / {props.time}
        </small>
      </div>
    </a>
  )
};

export default function Post() {
  return (
    <div className="container">
      <SessionTitle title="博客文章" />
      <div className="row">
        {
          post.map((item) => (
            <div className="col col--4" key={item.title}>
              <PostItem {...item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};