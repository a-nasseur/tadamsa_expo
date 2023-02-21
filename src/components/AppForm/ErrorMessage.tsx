import { Typography } from '@mui/material'
import React from 'react'

interface ErrorMessageProps {
    error?: any;
    visible?: any;
}

const ErrorMessage = ({ error, visible}: ErrorMessageProps) => {

    if(!error || !visible ) return null

  return (
    <Typography
        variant='caption'
        color='red'
    >
    { error }
    </Typography>
  )
}

export default ErrorMessage