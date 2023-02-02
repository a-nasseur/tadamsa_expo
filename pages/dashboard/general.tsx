import React from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'


import Layout from '../../src/components/dashboard/Layout'

type Props = {}

const General: NextPageWithLayout = (props: Props) => {
  return (
    <div>general</div>
  )
}


General.getLayout = function getLayout(general: ReactElement){
    return (
      <Layout>
        {general}
      </Layout>
    )
  }

export default General;