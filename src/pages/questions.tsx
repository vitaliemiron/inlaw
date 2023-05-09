import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { TeamList } from "src/TeamList"
import { QuestionsForm } from "src/QuestionsForm"
import { OnlineConsulting } from "src/OnlineConsulting"

const Questions: BlitzPage = () => {
  return <OnlineConsulting />
}

Questions.getLayout = (page) => <Layout>{page}</Layout>

export default Questions
