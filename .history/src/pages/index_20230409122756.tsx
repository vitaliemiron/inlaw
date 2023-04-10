import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import HomeBanner from "src/HomeBanner"

const Home: BlitzPage = () => {
  return (
    <Layout>
      <HomeBanner />
    </Layout>
  )
}

export default Home
