import React from "react"
import { Box, Grid, Button, Typography } from "@mui/material"
import { styled } from "@mui/system"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import Chat from "src/core/Chat"

const options = [
  { name: "Document 1", icon: <TextSnippetIcon />, href: "#" },
  { name: "Document 2", icon: <TextSnippetIcon />, href: "#" },
  { name: "Document 3", icon: <TextSnippetIcon />, href: "#" },
  { name: "Document 3", icon: <TextSnippetIcon />, href: "#" },
]

const LeftPart = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "272px",
}))

const RightPart = styled(Box)({
  background: "url('/acte-bg.png') no-repeat center center",
  backgroundSize: "cover",
  height: "307px",
  marginTop: "-20px",
  marginBottom: "-16px",
  width: "100",
})

const Option = ({ option }) => (
  <Box
    textAlign="center"
    mb={2}
    display={"grid"}
    gridTemplateColumns={"min-content 1fr 1fr"}
    alignItems={"center"}
  >
    {option.icon}
    <Typography>{option.name}</Typography>
    <Button variant="outlined" color="info" href={option.href}>
      Download
    </Button>
  </Box>
)

const HomeBanner = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <LeftPart>
            {options.map((option, index) => (
              <Option key={index} option={option} />
            ))}
          </LeftPart>
        </Grid>
        <Grid item xs={12} md={6}>
          <RightPart />
        </Grid>
      </Grid>
      <Grid container alignItems={"center"}>
        <Grid item xs={12}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeBanner
