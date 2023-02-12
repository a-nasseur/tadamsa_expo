import React, { useMemo, useState } from 'react';
import * as yup from 'yup';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../_app';
import Layout from '../../../src/components/dashboard/Layout';
import { Formik } from 'formik';
import { Box, Button, Container, FormControl, FormGroup, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Oval } from 'react-loader-spinner';


import Tiptap from '../../../src/components/dashboard/tiptap/Tiptap';
import Image from 'next/image';

type Props = {}

const AddArticle: NextPageWithLayout = (props: Props) => {

  // local states 
  const [info, setInfo] = useState<boolean>(true);
  const [comment, setComment] = useState<boolean>(false);
  const [content, setContent] = useState<any>();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  
  // handlers
  const handleInfo = () => {
    setComment(false)
    setInfo(true)

  }

  const handleComment = () => {
    setInfo(false)
    setComment(true)
  }
  
  const formatSlug = () => {
    const slug = title.toLocaleLowerCase();
    const splitted = slug.split(' ');
    return splitted.join('-')
  }

  const editorContent = (content: any) => {
    setContent(content)
  }

  const handleUpload = (files: any) => {
    console.log(files);
    const imageUrl = URL.createObjectURL(files[0]);
    console.log(imageUrl);
    setImageUrl(imageUrl);
  }

  const handleForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      title,
      slug,
      excerpt,
      content: content,
    }

    console.log(body)

    setLoading(false)
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
    content: useMemo(() => {
      return content
    }, [content]),
    thumbnail: '',
  }




  return (
    <Container sx={{ p: 1 }} maxWidth='xl'>
        <Typography
            variant='h5'
        >
            Ajouter un Article
        </Typography>
        <Grid container columnSpacing={4} marginTop={4}>
            <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <TextField 
                      placeholder='Titre'
                      type='text'
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField 
                      placeholder='Slug'
                      type='text'
                      value={formatSlug()}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                    <TextField 
                      placeholder='Extrait'
                      type='text'
                      onChange={(e) => setExcerpt(e.target.value)}
                    />
                    <Typography
                      variant='h6'
                      color='text.secondary'
                    >
                      Image du post
                    </Typography>
                    <Button variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" onChange={(e) => handleUpload(e.target.files)}/>
                    </Button>
                    {
                      imageUrl ?
                      <Image src={imageUrl} width={100} height={100} alt='post image' />
                      :
                      null
                    }
                    <Tiptap setContent={editorContent}/>
                    <Button onClick={handleForm} variant='contained'> 
                      {
                        loading ? 

                          <Oval 
                            height={18}
                            width={18}
                            color='#fff'
                            secondaryColor='#fff'

                        />

                        :

                        'Publier'
                      }
                    </Button>
                  </FormControl>
            </Grid>
            {/* <Grid item xs={12} md={4} >
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
                      variant='body2'
                      gutterBottom
                    >
                      Slug
                    </Typography>
                    <Typography
                      variant='body2'
                      gutterBottom
                      color='text.secondary'
                    >
                      {formatSlug()}
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
            </Grid> */}
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


