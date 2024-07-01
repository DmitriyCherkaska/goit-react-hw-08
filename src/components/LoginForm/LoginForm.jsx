import style from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(50, 'Password is too long - should be 50 chars maximum.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character.',
    ),
});

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={style.form}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={style.item}
            type="email"
            name="email"
            id={emailFieldId}
            autoComplete="email"
            placeholder="user@gmail.com"
          />
          <ErrorMessage name="email" component="span" />
          <label htmlFor={passwordFieldId}>Password</label>

          <Field
            className={style.item}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="span" />
          <button className={style.btn} type="submit">
            Log In
          </button>
          <p>
            Do not have a account?
            <Link to="/register" className={style.text}>
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};
