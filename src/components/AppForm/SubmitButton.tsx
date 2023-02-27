import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@mui/material';

interface SubmitButtonProps {
    title?: any;
}

const SubmitButton = ({ title, ...otherProps }: SubmitButtonProps) => {
  const { handleSubmit } =  useFormikContext<any>();

  return (
    <Button
      component='button'
      variant='contained'
      onClick={handleSubmit}
      {...otherProps}
    >
        {title}
    </Button>
  )
}

export default SubmitButton;