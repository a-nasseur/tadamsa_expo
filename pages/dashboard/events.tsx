import React from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'


import Layout from '../../src/components/dashboard/Layout'

type Props = {}

const Events: NextPageWithLayout = (props: Props) => {
  return (
    <div>events</div>
  )
}


Events.getLayout = function getLayout(events: ReactElement){
    return (
      <Layout>
        {events}
      </Layout>
    )
  }

export default Events;