import { Button, Card, CardContent, Container, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material'
import React from 'react'

type Props = {}

const LoginForm = (props: Props) => {

  const CustomTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: '#fff',
    marginBottom: '15px'
  }));

  return (
    <Container maxWidth='xs' sx={{marginTop: '50px'}}>
        <Card
            sx={{ width: 'inherit', backgroundColor: 'rgba(0, 0, 0, .3)' }}
        >
            <CardContent>
                <Typography
                    variant='h4'
                    color='#fff'
                    gutterBottom
                    fontFamily="Osande"
                >
                    Connection
                </Typography>
                <FormControl>
                    <FormGroup>
                        <CustomTextField 
                            placeholder='Email'
                            type="text"
                            name="email"                        
                        />
                        <CustomTextField 
                            placeholder='Mot de passe'
                            type="password"
                            name="password"
                        />
                    </FormGroup>
                    <Button variant='contained' size='large'>
                        Connection
                    </Button>
                </FormControl>  
            </CardContent>
        </Card>
    </Container>
  )
}

export default LoginForm