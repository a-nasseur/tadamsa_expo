import { Card, CardMedia } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface EventCardProps {
    image?: string;
    id?: string;
}

const EventCard = ({ image, id}: EventCardProps) => {
  return (
    <Card>
        <Link href="#" passHref>
            <CardMedia
                component="img"
                height="450"
                image={image}
            />
        </Link>
    </Card>
  )
}

export default EventCard