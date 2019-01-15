import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';


 const TextInputGroup =({
     label, type, name, placeholder, value, onChange, error 
 }) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} className={ClassNames('form-control form-control-lg', {'is-invalid': error})} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

//Set default props
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string
}

//Set default props
TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;