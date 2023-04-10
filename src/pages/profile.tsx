import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import DocumentsList from "src/DocumentsList"

const Profile: BlitzPage = () => {
  return <DocumentsList />
}

Profile.getLayout = (page) => <Layout>{page}</Layout>

export default Profile
