import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import { LoginForm } from "src/auth/components/LoginForm"
import React from "react"
import { withBlitz } from "src/blitz-client"

import { QueryClientProvider } from "@blitzjs/rpc"

import "src/styles/globals.css"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { ToastContainer } from "react-toastify"
import theme from "src/styles/theme"
import createEmotionCache from "src/utils/createEmotionCache"
import queryClient from "src/utils/query"
import { GlobalProvider } from "src/utils/providers/globalStateMachine"

import "react-toastify/dist/ReactToastify.css"

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return (
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    )
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalProvider>
          <ToastContainer position="top-center" />
          <ErrorBoundary FallbackComponent={RootErrorFallback}>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </GlobalProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default withBlitz(MyApp)
