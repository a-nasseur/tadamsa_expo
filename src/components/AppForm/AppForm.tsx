import React from 'react';
import { Formik } from 'formik';

interface FormProps {
  initialValues?: any;
  children?: any
  validationSchema?: any;
  onSubmit?: any
}

const AppForm = ({ initialValues, children, validationSchema, onSubmit }: FormProps) => {
  return (
    <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
    >
        {() => (<>{children}</>)}

    </Formik>
  )
}

export default AppForm;