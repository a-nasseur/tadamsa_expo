import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../_app';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { Box, Button, Container, FormControl, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Oval } from 'react-loader-spinner';
// import { CldUploadButton, CldImage } from 'next-cloudinary';


import Layout from '../../../src/components/dashboard/Layout';
import Tiptap from '../../../src/components/dashboard/tiptap/Tiptap';
import { db } from '../../../config/firebase';

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

  
  // Effects
  
  // Updating the slug state based on the formated title state
  useEffect(() => {
    setSlug(formatSlug())
  }, [title]);

  // handlers
  const handleInfo = () => {
    setComment(false);
    setInfo(true);
  }

  const handleComment = () => {
    setInfo(false);
    setComment(true);
  }
  
  const formatSlug = () => {
    const slug = title.toLocaleLowerCase();
    const splitted = slug.split(' ');
    return splitted.join('-')
  }



  const editorContent = (content: any) => {
    return setContent(content)
  }
  

  const handleUpload = (error: Error, result: any, widget: any) => {
    error ? console.log(error): 
    result ? console.log(result) : 
    console.log('khraaaaaaa');
  }

  const handleForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const docRef = collection(db, 'posts')

    const body = {
      title,
      slug,
      excerpt,
      content: JSON.stringify(content),
      createdDate: Timestamp.now().toDate(),
      createdBy: {
        avatar: '',
        fullName: "Abdelhak NASSEUR",
        id: 'uT3jVN6KCuQ75H1UEEeUwoB3o7X2'
      },
      image: ''
    }

    const response = await addDoc(docRef, body);

    console.log(response.id);

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
                    <FormGroup>
                      <TextField 
                        placeholder='Titre'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ marginBottom: 2}}
                      />
                      <TextField 
                        placeholder='Slug'
                        type='text'
                        value={formatSlug()}
                        onChange={(e) => setSlug(e.target.value)}
                        sx={{ marginBottom: 2}}
                      />
                      <TextField 
                        placeholder='Extrait'
                        type='text'
                        onChange={(e) => setExcerpt(e.target.value)}
                      />
                    </FormGroup>
                    {/* <Box pt={3}>
                      <CldUploadButton
                        className='cloudinary-btn'
                        uploadPreset="tadamsa_expo"
                        onUpload={handleUpload}
                      >Télécharger une image</CldUploadButton>
                    </Box>
                    {
                      imageUrl ?
                      <CldImage src={imageUrl} width={100} height={100} alt='post image' />
                      :
                      null
                    } */}
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


