import React from "react";
import styles from './SessionTitle.css';

export default function SessionTitle(props) {
  return (
    <h2 className="session-title">{props.title}</h2>
  );
};
