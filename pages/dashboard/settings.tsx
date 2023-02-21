import React from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'


import Layout from '../../src/components/dashboard/Layout'

type Props = {}

const Settings: NextPageWithLayout = (props: Props) => {
  return (
    <div>settings</div>
  );
};


Settings.getLayout = function getLayout(settings: ReactElement){
    return (
      <Layout>
        {settings}
      </Layout>
    )
}

export default Settings;