import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { TeamList } from "src/TeamList"
import { QuestionsForm } from "src/QuestionsForm"

const Questions: BlitzPage = () => {
  return <QuestionsForm />
}

Questions.getLayout = (page) => <Layout>{page}</Layout>

export default Questions
