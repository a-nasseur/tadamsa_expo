import { Button, Card, CardContent, Container, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material'
import React from 'react';

type Props = {
    onClick?: any
}

const LoginForm = ({ onClick }: Props) => {
  // Loading


  // local state
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');


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
                <form>
                    <FormControl fullWidth sx={{ padding: 4 }}>
                        <FormGroup>
                            <TextField 
                                placeholder='Email'
                                type="text"
                                onChange={(e: any) => setEmail(e.target.value)} 
                                sx={{ backgroundColor: '#fff', marginBottom: 2}}                      
                            />
                            <TextField 
                                placeholder='Mot de passe'
                                type="password"
                                onChange={(e: any) => setPassword(e.target.value)}     
                                sx={{ backgroundColor: '#fff', marginBottom: 2}}                          
                            />
                        </FormGroup>
                        <Button variant='contained' size='large' onClick={() => onClick(email, password)}>
                           Connection
                        </Button>
                    </FormControl>  
                </form>
            </CardContent>
        </Card>
    </Container>
  )
}

export default LoginForm