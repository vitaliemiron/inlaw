import React from "react"
import { Box, Grid, Button, Typography } from "@mui/material"
import { styled as MuiStyled } from "@mui/system"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import Chat from "src/core/Chat"
import styled from "@emotion/styled"

export const Container = styled.div`
  background-color: #e0d6f5;
  margin-top: -20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
`

const options = [
  { name: "Declarații", icon: <TextSnippetIcon />, href: "#" },
  { name: "Cereri", icon: <TextSnippetIcon />, href: "#" },
  { name: "Demersuri", icon: <TextSnippetIcon />, href: "#" },
  { name: "Ordonanțe", icon: <TextSnippetIcon />, href: "#" },
]

const LeftPart = MuiStyled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  textAlign: "left",
}))

const RightPart = MuiStyled(Box)({
  background: "url('/acte-bg.png') no-repeat center center",
  backgroundSize: "cover",
  marginBottom: "-16px",
  width: "100%",
  height: "100%",
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
      Descarcă
    </Button>
  </Box>
)

const DocumentsList = () => {
  return (
    <Container>
      <LeftPart>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </LeftPart>
      <RightPart />
    </Container>
  )
}

export default DocumentsList
