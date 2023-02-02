import React from 'react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'


import Layout from '../../src/components/dashboard/Layout'

type Props = {}

const Profile: NextPageWithLayout = (props: Props) => {
  return (
    <div>profile</div>
  );
};


Profile.getLayout = function getLayout(profile: ReactElement){
    return (
      <Layout>
        {profile}
      </Layout>
    )
}

export default Profile;