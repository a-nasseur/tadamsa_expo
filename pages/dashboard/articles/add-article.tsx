import React, { useState } from 'react';
import { useFormik } from 'formik';
import {$getRoot, $getSelection} from 'lexical';
import * as yup from 'yup';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../_app';
import Layout from '../../../src/components/dashboard/Layout';
import { Formik } from 'formik';
import { Box, Button, Container, FormControl, FormGroup, Grid, TextField, Typography } from '@mui/material';


import Editor from '../../../src/components/dashboard/editor/Editor';

type Props = {}

const AddArticle: NextPageWithLayout = (props: Props) => {
  // local states 
  const [info, setInfo] = useState<boolean>(true);
  const [comment, setComment] = useState<boolean>(false);

  
  // handlers
  const handleInfo = () => {
    setComment(false)
    setInfo(true)

  }

  const handleComment = () => {
    setInfo(false)
    setComment(true)
  }

  // handleContent
  function onChange(editorState: any) {
    console.log(JSON.stringify(editorState));
    editorState.read(() => {
      // console.log(JSON.stringify(editorState))
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();
    });
  }
  

  // date
  const date = new Date("2023-02-12T23:50:21.817Z").toDateString();

  // Yup
  const validationSchema = yup.object({
    email: yup
      .string()
      .min(8)
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const initialValues = {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    thumbnail: '',
  }

  return (
    <Container sx={{ p: 1 }} maxWidth='xl'>
        <Typography
            variant='h5'
        >
            Ajouter un Article
        </Typography>
        <Grid container marginTop={4}>
            <Grid item xs={12} md={8}>
                {/* <FormControl fullWidth>
                    <TextField  
                        sx={{ marginBottom: 2}}
                        fullWidth
                        id="title"
                        name="title"
                        label="Titre"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        
                    />
                    <TextField  
                        sx={{ marginBottom: 2}}
                        fullWidth
                        id="slug"
                        name="slug"
                        label="Slug"
                        value={formik.values.slug}
                        onChange={formik.handleChange}
                        error={formik.touched.slug && Boolean(formik.errors.slug)}
                        helperText={formik.touched.slug && formik.errors.slug}
                        
                    />
                    <TextField  
                        sx={{ marginBottom: 2}}
                        fullWidth
                        id="excerpt"
                        name="excerpt"
                        label="Extrait"
                        multiline
                        rows={2}
                        value={formik.values.excerpt}
                        onChange={formik.handleChange}
                        error={formik.touched.excerpt && Boolean(formik.errors.excerpt)}
                        helperText={formik.touched.excerpt && formik.errors.excerpt}
                        
                    />
                    <TextField  
                        sx={{ marginBottom: 2}}
                        fullWidth
                        id="content"
                        name="content"
                        label="Article"
                        multiline
                        rows={8}
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        error={formik.touched.content && Boolean(formik.errors.content)}
                        helperText={formik.touched.content && formik.errors.content}
                        
                    />
                </FormControl> */}
                <Formik
                  initialValues={initialValues}
                  onSubmit={values => console.log(values)}
                >
                  {
                    ({ handleSubmit, handleChange }) => (
                      <FormControl>
                        <FormGroup>
                          <TextField 
                            placeholder='Titre'
                            type='text'
                            name='title'
                            onChange={handleChange('title')}
                            sx={{ marginBottom: 2}}

                          />
                          <TextField 
                            placeholder='Slug'
                            type='text'
                            name='slug'
                            onChange={handleChange('slug')}
                            sx={{ marginBottom: 2}}

                          />
                          <TextField 
                            placeholder='Extrait'
                            type='text'
                            name='title'
                            onChange={handleChange('excerpt')}
                            sx={{ marginBottom: 2}}
                          />
                          <Editor onChange={onChange}/>
                        </FormGroup>
                        <>
                          <Button variant='contained' onClick={() => handleSubmit()} >
                            Publier
                          </Button>
                        </>
                      </FormControl>
                    )
                  }
                </Formik>
            </Grid>
            <Grid item xs={12} md={4} >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  alignItems: 'center',

                }}
              >
                <Button
                  variant='contained'
                  onClick={handleInfo}
                  sx={{ width: '100%'}}

                  
                >
                  info
                </Button>
                <Button
                  variant='contained'
                  onClick={handleComment}
                  
                >
                  comments
                </Button>
              </Box>
              {
                info &&
                <Box
                  sx={{
                    marginY: 2,
                  }}
                >
                  <Typography
                    variant='h6'
                    gutterBottom
                  >
                    Infos
                  </Typography>
                  
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      variant='body2'
                      gutterBottom
                    >
                      ID 
                    </Typography>
                    <Typography
                      variant='body2'
                      gutterBottom
                      color='text.secondary'
                    >
                      ID 019804ASFKJ10984okjf091
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                  <Typography
                    variant='body1'
                    gutterBottom
                  >
                    Crée par 
                  </Typography>
                  <Typography
                    variant='body1'
                    gutterBottom
                    color='text.secondary'
                  >
                    Abdelhak NASSEUR
                  </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                  <Typography
                    variant='body1'
                    gutterBottom
                  >
                    Crée le 
                  </Typography>
                  <Typography
                    variant='body1'
                    gutterBottom
                    color='text.secondary'
                  >
                    {date}
                  </Typography>
                  </Box>
                  <Typography
                    variant='h6'
                  >
                    Status
                  </Typography>
                </Box>
              }
              {
                comment &&
                <Box
                  sx={{
                    marginY: 2,
                  }}
                >
                  <Typography>
                    comment
                  </Typography>
                </Box>
              }
            </Grid>
        </Grid> 
    </Container>
  )
}


AddArticle.getLayout = function getLayout(addArticle: ReactElement){
    return (
      <Layout>
        {addArticle}
      </Layout>
    )
  }

export default AddArticle;


