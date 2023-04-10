import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material"

import { styled } from "@mui/system"

const CustomAppBar = styled(AppBar)({
  marginBottom: "1rem",
})

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "inlaw"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <CustomAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Logo
            </Typography>
            {pages.map((page, index) => (
              <Box key={index} ml={2}>
                <a href={page.href}>{page.name}</a>
              </Box>
            ))}
          </Toolbar>
        </CustomAppBar>

        <Container>{children}</Container>

        <footer>
          <Box mt={4}>
            <Typography variant="body1">
              email: inlaw@gmail.com <br />
              facebook.com/inlaw <br />
              069022506
            </Typography>
          </Box>
        </footer>
      </Box>
      );
    </>
  )
}

export default Layout
