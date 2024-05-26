import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, onTimeout, type = 'success', timeout = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  const messageStyle = {
    color: type === 'success' ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return <div style={messageStyle}>{message}</div>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  onTimeout: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  timeout: PropTypes.number,
};

export default Message;
