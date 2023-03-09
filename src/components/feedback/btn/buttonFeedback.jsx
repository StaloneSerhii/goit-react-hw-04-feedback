import React from 'react';
import PropTypes from 'prop-types';
import { BuntonStatistics, BtnGroup } from './btn.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <BtnGroup>
    {options.map((option, index) => (
      <BuntonStatistics type="button"  onClick={() => onLeaveFeedback(option)} key={index}>
        {option}
      </BuntonStatistics>
    ))}
  </BtnGroup>
);


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedBack: PropTypes.func,
};
