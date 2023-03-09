import React from 'react';
import propTypes from 'prop-types';
import { ListStats } from './Statistics.styled';

export const Statistics = ({
  good,
  normal,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStats>
      <li>
        <h3>Good: {good}</h3>
      </li>
      <li>
        <h3>Normal: {normal}</h3>
      </li>
      <li>
        <h3>Bad: {bad}</h3>
      </li>
      <li>
        <h3>Total: {total}</h3>
      </li>
      <li>
        <h3>Positive feedback: {positivePercentage}%</h3>
      </li>
    </ListStats>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  normal: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
