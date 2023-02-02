import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../_app';
import Layout from '../../../src/components/dashboard/Layout';
import { Container, FormControl, Grid, TextField, Typography } from '@mui/material';

type Props = {}

const AddArticle: NextPageWithLayout = (props: Props) => {
  // local states
  const [slug, setSlug] = useState('');

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

  // Formik
  const formik = useFormik({
    initialValues: {
        title: '',
        slug,
        excerpt: '',
        content: '',
        thumbnail: '',

    },
    validationSchema: validationSchema,
        onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
    },
    });


  return (
    <Container sx={{ p: 1 }} maxWidth='xl'>
        <Typography
            variant='h5'
        >
            Ajouter un Article
        </Typography>
        <Grid container marginTop={4}>
            <Grid item xs={12} md={8}>
                <FormControl fullWidth>
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
                </FormControl>
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