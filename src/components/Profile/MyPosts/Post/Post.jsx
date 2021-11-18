import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://img2.freepng.ru/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" alt="" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;

