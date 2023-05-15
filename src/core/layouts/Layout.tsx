import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { styled } from "@mui/system"

const AppContent = styled("div")`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
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

  "& .active": {
    color: theme.palette.primary.main,
  },
}))

const CustomFooter = styled("footer")(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "0 auto",
  marginTop: "auto",
  width: "100%",
  textAlign: "center",
  background: "#fff",
}))

const StyledBox = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#fafafa",
})

const pages = [
  { name: "Home", href: "/" },
  { name: "Întrebări", href: "/questions" },
  { name: "Răspunsuri", href: "/answers" },
  { name: "Juriști", href: "/team" },
  { name: "Acte", href: "/acte" },
]

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const router = useRouter()
  const currentPath = router.asPath
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
              <Image src="/logo.png" width="55" height="50" alt="inlaw" />
            </Typography>
            <Box className="box">
              {pages.map((page, index) => (
                <Box key={index} ml={2}>
                  <a
                    href={page.href}
                    className={currentPath === page.href ? "active" : "not-active"}
                  >
                    {page.name}
                  </a>
                </Box>
              ))}
              <Box ml={2}>
                <Link href="/consultation">
                  <Button variant="outlined">Asistenta cu plata</Button>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </CustomAppBar>

        <AppContent>{children}</AppContent>

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
