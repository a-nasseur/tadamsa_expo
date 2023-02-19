import React, { useState } from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../../_app'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { Box, Button, Container, FormControl, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { Oval } from 'react-loader-spinner';

import Layout from '../../../src/components/dashboard/Layout'
import Tiptap from '../../../src/components/dashboard/tiptap/Tiptap';
import { db } from '../../../config/firebase';

type Props = {}

const AddEvent: NextPageWithLayout = (props: Props) => {
  // Local States
  const [content, setContent] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(''); 
  const [subtitle, setSubTitle] = useState<string>('');
  const [whatsApp, setWhatsapp] = useState<string>('');
  const [phoneNumber, setPhonNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [website, setWebSite] = useState<string>('');
  const [websiteTitle, setWebSiteTitle] = useState<string>('');
  const [facebook, setFacebook] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [sideBarExcerpt, setSideBarExcerpt] = useState<string>('');
  const [excerpt, setExcerpt] = useState<string>('');
  const [sidebarTitle, setSideBarTitle] = useState<string>('');



  const handleForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const docRef = collection(db, 'events')

    const body = {
      title,
      subtitle,
      excerpt,
      sidebarTitle,
      sideBarExcerpt,
      content: JSON.stringify(content),
      createdBy: {
        avatar: '',
        fullName: "Abdelhak NASSEUR",
        id: 'uT3jVN6KCuQ75H1UEEeUwoB3o7X2'
      },
      createdAt: Timestamp.now().toDate(),
      contacts: {
        whatsApp,
        phoneNumber,
        email
      },
      eventBannerImage: '',
      eventImage: '',
      socialLinks: {
        facebook,
        twitter,
        instagram,
        linkedin
      },
      website: {
        link: website,
        title: websiteTitle,
      }
    }

    const response = await addDoc(docRef, body);

    console.log(response.id);

    setLoading(false)
  }

  const editorContent = (content: any) => {
    return setContent(content)
  }
  

  return (
    <Container sx={{ p: 1 }} maxWidth='xl'>
        <Typography
            variant='h5'
            paddingY={3}
        >
            Ajouter un Evènement
        </Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          <FormControl fullWidth>
            <TextField 
              variant='outlined'
              label="Titre de l'évènement"
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField 
              placeholder="Sous titre"
              type='text'
              onChange={(e) => setSubTitle(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField 
              placeholder="Descriptif"
              multiline
              rows={3}
              type='text'
              onChange={(e) => setSideBarExcerpt(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField 
              placeholder="Extrait"
              type='text'
              multiline
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              sx={{ marginBottom: 2 }}
            />
            <TextField 
              placeholder="Titre secondaire"
              type='text'
              onChange={(e) => setSideBarTitle(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Box>
              <Typography
                variant='body1'
                gutterBottom
                color='text.secondary'
                fontWeight='bold'
                paddingBottom={2}
              >
                Contacts
              </Typography>

              <FormControl fullWidth>
                <TextField 
                  placeholder="WhatsApp +213 555 555 555"
                  type='text'
                  sx={{ marginBottom: 2 }}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
                <TextField 
                  placeholder="Numero de telephone"
                  type='text'
                  onChange={(e) => setPhonNumber(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <TextField 
                  placeholder="email"
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
              </FormControl>
            </Box>
            <Box>
              <Typography
                variant='body1'
                gutterBottom
                color='text.secondary'
                fontWeight='bold'
                paddingBottom={2}
              >
                Site web
              </Typography>

              <FormControl fullWidth>
                <TextField 
                  placeholder="https://bevalg.com"
                  type='text'
                  onChange={(e) => setWebSite(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <TextField 
                  placeholder="Nom du site ... BEVALG®"
                  type='text'
                  onChange={(e) => setWebSiteTitle(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
              </FormControl>
            </Box>
            <Box>
              <Typography
                variant='body1'
                gutterBottom
                color='text.secondary'
                fontWeight='bold'
                paddingBottom={2}
              >
                Liens réseaux sociaux 
              </Typography>

              <FormControl fullWidth>
                <TextField 
                  placeholder="Facebook"
                  type='text'
                  onChange={(e) => setFacebook(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <TextField 
                  placeholder="twitter"
                  type='text'
                  onChange={(e) => setTwitter(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <TextField 
                  placeholder="instagram"
                  type='text'
                  onChange={(e) => setInstagram(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <TextField 
                  placeholder="linkedin"
                  type='text'
                  onChange={(e) => setLinkedin(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
              </FormControl>
            </Box>
            <Tiptap setContent={editorContent}/>
            <Button
              onClick={handleForm}
              variant='contained'
            >
              {
                loading ? 
                <Oval 
                  height={22}
                  width={22}
                  color='#fff'
                  secondaryColor='#fff'
                />
                :
                "Publier"
              }
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  )
}



AddEvent.getLayout = function getLayout(events: ReactElement){
    return (
      <Layout>
        {events}
      </Layout>
    )
  }

export default AddEvent;

