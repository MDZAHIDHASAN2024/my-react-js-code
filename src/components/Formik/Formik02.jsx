import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const onSubmit = (value) => {
  console.log(value);
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name have must at least 2 characters')
    .required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
  password: yup
    .string()
    .min(6, 'Password have a must at least 6 characters')
    .required('Required'),
});

const Formik02 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">
            Name:
            <Field type="text" name="name" id="name" />
          </label>
        </div>
        <ErrorMessage name="name" />
        <div className="form-control">
          <label htmlFor="email">
            Email:
            <Field type="email" name="email" id="email" />
          </label>
        </div>
        <ErrorMessage name="email" />
        <div className="form-control">
          <label htmlFor="password">
            Password:
            <Field type="password" name="password" id="password" />
          </label>
        </div>
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Formik02;
