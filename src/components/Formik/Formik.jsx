import { FormikConsumer, useFormik } from 'formik';
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

const Formik = () => {
  // formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );

  const renderErrorPassword = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              {...formik.getFieldProps('name')}
            />
          </label>
        </div>
        {renderNameError}
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
          </label>
        </div>
        {renderEmailError}
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              {...formik.getFieldProps('password')}
            />
          </label>
        </div>
        {renderErrorPassword}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formik;
