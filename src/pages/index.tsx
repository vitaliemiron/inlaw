import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { HomeBanner } from "src/HomeBanner"
import { Info } from "src/Info"

const Home: BlitzPage = () => {
  return (
    <div>
      <HomeBanner />
      <Info />
    </div>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>
export default Home
