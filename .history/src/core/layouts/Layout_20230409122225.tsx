import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material"
import Image from "next/image"

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

  "& .logo": {
    marginRight: theme.spacing(20),
  },

  "& .box": {
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
  },
}))

const CustomFooter = styled("footer")(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "0 auto",
  marginTop: "auto",
}))

const StyledBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
})

const pages = [
  { name: "Home", href: "/" },
  { name: "Întrebări", href: "/about" },
  { name: "Răspunsuri", href: "/contact" },
  { name: "Juriști", href: "/contact" },
  { name: "Acte", href: "/contact" },
  { name: "Profil", href: "/contact" },
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
            <Typography variant="h6" component="div" className="logo">
              <Image src="/logo.png" width="101" height="106" alt="inlaw" />
            </Typography>
            <Box className="box">
              {pages.map((page, index) => (
                <Box key={index} ml={2}>
                  <a href={page.href}>{page.name}</a>
                </Box>
              ))}
              <Box ml={2}>
                <Button variant="outlined">Aistenta cu palta</Button>
              </Box>
            </Box>
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
