import { Card, CardMedia } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface EventCardProps {
    thumbnail?: string;
    id?: string | number;
    published?: boolean;
}

const EventCard = ({ thumbnail, id, published }: EventCardProps) => {
  return (
    <>
      {
        published &&
        <Card>
            <Link href={"/events/" + id} passHref>
                <CardMedia
                    component="img"
                    height="450"
                    image={thumbnail}
                />
            </Link>
        </Card>
      }
      {
        !published &&
        <Card>
          <CardMedia
              component="img"
              height="450"
              image={thumbnail}
          />
        </Card>
      }
    </>
  )
}

export default EventCard