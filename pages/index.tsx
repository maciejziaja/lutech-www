import type { NextPage } from 'next'
import { LandingLayout } from '../components/landing-layout/landing-layout'
import { LandingInfo } from '../components/landing-info/landing-info'

const Home: NextPage = () => {
  return (
    <LandingLayout>
      <LandingInfo></LandingInfo>
    </LandingLayout>
  )
}

export default Home
