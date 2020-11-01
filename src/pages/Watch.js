import React from 'react'
import Layout from '../components/Layout/Layout'
import Sidelist from '../components/SideList/SideList'
import VideoDetail from '../components/VideoDetail/VideoDetail'

const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <Sidelist />
    </Layout>
  )
}

export default Watch
