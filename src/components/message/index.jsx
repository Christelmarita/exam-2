import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Message component displays a message with a specified style and automatically hides after a timeout.
 *
 * @component
 * @param {Object} props
 * @param {string} props.message
 * @param {Function} props.onTimeout
 * @param {string} [props.type='success']
 * @param {number} [props.timeout=2000]
 * @returns {JSX.Element}
 */
const Message = ({ message, onTimeout, type = 'success', timeout = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  const messageStyle = {
    color: type === 'success' ? 'green' : 'red',
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
