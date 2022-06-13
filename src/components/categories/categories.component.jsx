import React from 'react';
import Category from '../category/category.component';
import data from './categories.json';

import './categories.styles.scss'

const Categories = () => {
  return (
    <div className="categories">
      {data.map((category) => (
        <Category key={category.id} title={category.title} imgURL={category.imgURL} />
      ))}
    </div>
  );
};

export default Categories;
