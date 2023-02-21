import React, { useEffect, useMemo, useState } from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../../_app'
import { DataGrid, GridColDef, GridRowsProp, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridValueFormatterParams } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import LinearProgress from '@mui/material/LinearProgress';
import { getDocs, collection } from 'firebase/firestore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';


import Layout from '../../../src/components/dashboard/Layout';
import { Avatar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import { db } from '../../../config/firebase';
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

const Articles: NextPageWithLayout = (props: Props) => {
  // Local states
  const [rowsData, setRowsData] = useState([]);

  // Fetching data
  const getArticles = async () => {

    try{
      const refDocs = collection(db, 'posts');
      const response = await getDocs(refDocs);

      let articles: any = [];

      response.forEach(doc => {
          articles.push({ id: doc.id, ...doc.data() })
      });

      console.log(articles)

      setRowsData(articles);

    } catch (error) {
        console.log(error)
    }

  }

  // React effect
  useEffect(() => {
    getArticles();
  }, [])


  // custom toolbar
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  

  // Rows
  const rows: GridRowsProp = useMemo(() => rowsData, [rowsData]);

  // Columns
  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'id', 
      width: 95 
    },
    { 
      field: 'title', 
      headerName: 'Titre', 
      width: 200 
    },
    { 
      field: 'excerpt', 
      headerName: 'Extrait', 
      width: 200 
    },
    { 
      field: 'createdBy', 
      headerName: 'Crée par', 
      width: 200,
      renderCell: params =>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <Typography variant='body2'>Abdelhak Nasseur</Typography>
        </Box> 
    },
    { 
      field: 'content', 
      headerName: 'Contenu', 
      width: 200 
    },
    {
      field: 'createdAt', 
      headerName: 'Date de Création',
      headerClassName: 'table-header', 
      width: 170, 
      type: 'dateTime',
      filterable: false,
      valueFormatter: (params: GridValueFormatterParams<any>) => {
        return params.value ? new Date(params.value?.seconds).toLocaleString() : 'Pas de date';
      } 
    },
    {
      field: 'updatedAt', 
      headerName: 'Mis à jour le',
      headerClassName: 'table-header', 
      width: 170, 
      type: 'dateTime',
      filterable: false,
      valueFormatter: (params: GridValueFormatterParams<any>) => {
        return params.value ? new Date(params.value?.seconds).toLocaleString() : 'Pas de date';
      } 
    },
    { 
      field: 'updatedBy', 
      headerName: 'Mis à jour par ', 
      width: 200,
      renderCell: params =>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
          <Typography variant='body2'>Abdelhak Nasseur</Typography>
        </Box> 
    },
    { 
      field: 'image', 
      headerName: 'Thumbnail', 
      width: 100,
      renderCell: params =>
        <Box>
          <Image src={params.value} alt="post thumbnail image" height={80} width={80} />
        </Box> 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      renderCell: params => 
      <>
        <IconButton sx={{ color: 'secondary.main'}}>
          <EditIcon color='inherit' />
        </IconButton>
        <IconButton sx={{ color: 'primary.main'}}>
          <DeleteIcon color='inherit'  />
        </IconButton>
      </>
    }
  ];

  
  

  return (
    <>
      <Container maxWidth='xl'>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant='h5'
            fontFamily="Osande"
          >
            Articles
          </Typography>
          <Link href={'/dashboard/articles/add-article'} passHref>
            <Button
              variant='contained'
              startIcon={<AddIcon />}
            >
              Ajouter
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            marginTop: 4,
            width: '100%',
            height: 620,

          }}
        >
          <DataGrid 
            rows={rows} 
            columns={columns}
            components={{
              Toolbar: CustomToolbar,
              LoadingOverlay: LinearProgress,
            }}
            disableSelectionOnClick
            
          />
        </Box>
      </Container>
    </>
  )
}


Articles.getLayout = function getLayout(articles: ReactElement){
    return (
      <Layout>
        {articles}
      </Layout>
    )
  }

export default Articles;