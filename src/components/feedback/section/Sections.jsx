import React from 'react';
import propTypes from 'prop-types';
import { FeedBack } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <FeedBack>{title}</FeedBack>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
};
