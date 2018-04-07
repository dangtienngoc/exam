import React from 'react';
import './Loading.css';
import LoadingImage from '../asserts/ajax-loader.gif';

export const Loading = () => <div className="loading">Loading...</div>;
export const Loading1 = () => <div className="loading">
  <img src={LoadingImage} alt="Loading" />
</div>;