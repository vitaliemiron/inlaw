import Layout from "src/core/layouts/Layout"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/core/components/Form"
import { ForgotPassword } from "src/auth/schemas"
import forgotPassword from "src/auth/mutations/forgotPassword"
import { useMutation } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/next"
import styled from "@emotion/styled"

export const Container = styled.div`
  display: grid;
  justify-content: center;
`

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <Layout title="Forgot Your Password?">
      <Container>
        <h1>Forgot your password?</h1>

        {isSuccess ? (
          <div>
            <h2>Request Submitted</h2>
            <p>
              If your email is in our system, you will receive instructions to reset your password
              shortly.
            </p>
          </div>
        ) : (
          <Form
            submitText="Send Reset Password Instructions"
            schema={ForgotPassword}
            initialValues={{ email: "" }}
            onSubmit={async (values) => {
              try {
                await forgotPasswordMutation(values)
              } catch (error: any) {
                return {
                  [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                }
              }
            }}
          >
            <LabeledTextField name="email" label="Email" placeholder="Email" />
          </Form>
        )}
      </Container>
    </Layout>
  )
}

export default ForgotPasswordPage
