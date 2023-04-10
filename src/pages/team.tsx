import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { TeamList } from "src/TeamList"

const Team: BlitzPage = () => {
  return <TeamList />
}

Team.getLayout = (page) => (
  <Layout>
    <Team />
  </Layout>
)

export default Team
