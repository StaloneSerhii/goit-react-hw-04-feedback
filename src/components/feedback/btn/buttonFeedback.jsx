import React from 'react';
import propTypes from 'prop-types';
import { BuntonStatistics, BtnGroup } from './btn.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <BtnGroup>
    {options.map((option, index) => (
      <BuntonStatistics type="button" onClick={onLeaveFeedback} key={index}>
        {option}
      </BuntonStatistics>
    ))}
  </BtnGroup>
);

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedBack: propTypes.func.isRequired,
};
