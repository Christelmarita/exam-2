import React from 'react';
import PropTypes from 'prop-types';
import { BtnForm } from '../index.styles';

function FormBtn({ text, onClick, type }) {
  return (
    <BtnForm onClick={onClick} type={type}>
      {text}
    </BtnForm>
  );
}

FormBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default FormBtn;
