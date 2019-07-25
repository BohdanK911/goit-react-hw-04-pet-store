import React from 'react';
import style from './Loading.module.css';

const Loading = () => (
  <div className={style.wrapper}>
    <span className={style.loading}>Loading...</span>
  </div>
);

export default Loading;
