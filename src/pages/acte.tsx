import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import DocumentsList from "src/DocumentsList"

const Documents: BlitzPage = () => {
  return <DocumentsList />
}

Documents.getLayout = (page) => (
  <Layout>
    <DocumentsList />
  </Layout>
)

export default Documents
