import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"

const Home: BlitzPage = () => {
  return <div>test</div>
}

Home.getLayout = (page) => <Layout>{page}</Layout>
export default Home
