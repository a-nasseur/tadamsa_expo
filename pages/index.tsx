import { Typography } from "@mui/material"
import Meta from "../src/utils/Meta"
import Header from "../src/components/Header"

export default function Home() {
  return (
     <>
        <Meta 
          title="Tadamsa Expo"
          description="Organisateur d'événements sous la baniere des valeurs Tadamsa"
          canonical="https://tadamsaexpo.com"
          openGraph={{
            url: 'https://www.tadamsaexpo.com',
            title: 'Tadamsa Expo',
            description: "Ready for tommorow's Algeria",
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
            siteName: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        
        />

        <Header />

     </>
  )
}
