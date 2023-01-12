import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

interface ArticleCardProps {
    id?: string;
    title?: string;
    image?: string;
    alt?: string;
    date?: string;
    excerpt?: string;
}


const ArticleCard = ({ id, title, image, alt, date, excerpt }: ArticleCardProps) => {
  return (
        <Card
            sx={{
              width: '100%',
              '&:hover': {
                elevation: 2
              }
            }}
          >
            <Link href={`/article/${id}`} passHref>
              <CardMedia
                  component="img"
                  height="194"
                  image={image}
                  alt={alt}
                />
            </Link>
            <CardContent>
              <Typography
                variant='subtitle2'
                color='text.secondary'
              >
               {date}
              </Typography>
              <Link href={`/article/${id}`} passHref>
                <Typography
                  variant='h5'
                  fontFamily="Osande"
                  gutterBottom
                  sx={{
                    transition: 'color .5s ease',
                    '&:hover':{
                      color: '#E42313'
                    }
                  }}
                >
                  {title}
                </Typography> 
              </Link>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                {excerpt}
              </Typography>
            </CardContent>
        </Card>
  )
}

export default ArticleCard;