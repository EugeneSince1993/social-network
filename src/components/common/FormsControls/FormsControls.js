import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
      <div>
        {children}
      </div>
      { hasError && <span>{error}</span> }
    </div>
  );
};

export const Textarea = (props) => {
  const {input, ...restProps} = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};

export const Input = (props) => {
  const {input, ...restProps} = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      /> {text}
    </div>
  );
};
