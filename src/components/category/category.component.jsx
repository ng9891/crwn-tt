import React from 'react';
import './category.styles.scss';

const Category = ({title, imgURL}) => {
  return (
    <div className="category">
      <img src={imgURL} alt={title} loading="lazy" />
      <div className="body">
        <div className="title">{title}</div>
        <a href="#">Shop Now</a>
      </div>
    </div>
  );
};

export default Category;
