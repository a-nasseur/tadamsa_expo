import { Alert, Button, FormControl, FormGroup, IconButton, TextField, Typography } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import * as Yup from 'yup';



type Props = {}

const NewsletterForm = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>('');
  const [error, setError] = useState<string>('');


  // Validation schema 
  const validationSchema = Yup.object().shape({
    email_address: Yup.string().required().email().label('Email'),
    status: Yup.string().required()
  })

  // Handlers

  const newsletterSubscriptionErrorHanlder = (errorMessage: string): string => {
    return errorMessage == 'Invalid Resource' ? 'Adresse email incorrecte' : 
    errorMessage == 'Member Exists' ? 'Cette adresse est deja inscrite' : 'Erreur inconnu' 
  }


  const newsletterSubscription = async (e: any) => {
    e.preventDefault();
    setLoading(true)


    // Declaring data
    const body = {
      email_address: email,
      status: 'pending'
    }

    const valid = await validationSchema.isValid(body);

    if(!valid){
      setLoading(false);
      return setError('Adresse email non valide');
    }

    const response: any = await fetch(`http://localhost:3000/api/newsletter/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.json();

    const errorMessage = !data.success ? newsletterSubscriptionErrorHanlder(data.response) : ''

    response.success ? setAlert(data.response) : setError(errorMessage)

    error ? setTimeout(() => { setError('')}, 2500) : alert ? setTimeout(() => { setAlert('')}, 2500) : ''

    setLoading(false);

  }


  return (
    <>
    <FormControl sx={{ marginTop: 2}}>
        <FormGroup row>
          <TextField
            placeholder='Email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: '#fff'}}

          />
          <Button variant='contained' onClick={(e) => newsletterSubscription(e)}>
            {
              loading ? 

              <Oval 
                height={22}
                width={22}
                color='#fff'
                secondaryColor='#fff'
              />

              :

              "S'inscrire"
            }
          </Button>
        </FormGroup>
        {
            alert && 
            <Alert
            sx={{ marginTop: 2 }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert('');
                }}
              >
                <GridCloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alert}
          </Alert>
        }
        {
            error && 
            <Alert
            sx={{ marginTop: 2 }}
            severity='error'
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setError('');
                }}
              >
                <GridCloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
           {error}
          </Alert>
        }
      </FormControl>
      
    </>
  )
}

export default NewsletterForm

