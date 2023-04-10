import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { HomeBanner } from "src/HomeBanner"

const Home: BlitzPage = () => {
  return (
    <div>
      <HomeBanner />
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>
export default Home
