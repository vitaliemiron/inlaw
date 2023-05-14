import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { useSession } from "@blitzjs/auth"
import { Suspense } from "react"
import { QuestionsForm } from "src/QuestionsForm"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { useMutation } from "@blitzjs/rpc"
import { getAntiCSRFToken } from "@blitzjs/auth"
import useCheckout from "src/mutations/useCheckout"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const Container = styled.div`
  display: grid;
  justify-content: center;
`

const ConsultationForm = () => {
  const session = useSession()
  const router = useRouter()
  const antiCSRFToken = getAntiCSRFToken()

  const [mutate] = useMutation(useCheckout)

  if (!session.userId) {
    void router.push("/login")
  }

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.")
    }

    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you’re ready.")
    }
  }, [])

  return (
    <Container>
      <h1>Consultation {session.userId}</h1>

      {!router?.query?.success && (
        <section>
          <p>Pretul unei consultatii este 200 MDL</p>
          <button
            type="submit"
            role="link"
            onClick={async () => {
              const rs = await mutate(antiCSRFToken)
              window.open(rs.sessionURL as string, "_self")
            }}
          >
            Achita 200 MDL
          </button>
        </section>
      )}

      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>

      {router?.query?.success && <QuestionsForm />}
    </Container>
  )
}

const Consultation: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <ConsultationForm />
      </Suspense>
    </div>
  )
}

Consultation.getLayout = (page) => <Layout>{page}</Layout>

export default Consultation
