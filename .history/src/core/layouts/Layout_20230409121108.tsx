import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material"

import { styled } from "@mui/system"

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  marginBottom: "1rem",
  "& a": {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}))

const CustomFooter = styled("footer")(({ theme }) => ({
  marginTop: "auto",
  padding: theme.spacing(2),
  margin: "0 auto",
}))

const StyledBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
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
      <StyledBox>
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

        <CustomFooter>
          <Typography variant="body1">
            email: inlaw@gmail.com <br />
            facebook.com/inlaw <br />
            069022506
          </Typography>
        </CustomFooter>
      </StyledBox>
      );
    </>
  )
}

export default Layout
