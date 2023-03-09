import React from 'react';
import propTypes from 'prop-types';
import { Notifik } from './Not.styled';

export const Notification = ({ message }) => {
  return <Notifik>{message}</Notifik>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
