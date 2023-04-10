import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import DocumentsList from "src/DocumentsList"
import { LoginForm } from "src/auth/components/LoginForm"
import { useRouter } from "next/router"

const Profile: BlitzPage = () => {
  const router = useRouter()

  return (
    <LoginForm
      onSuccess={(_user) => {
        const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
        return router.push(next)
      }}
    />
  )
}

Profile.getLayout = (page) => <Layout>{page}</Layout>

export default Profile
