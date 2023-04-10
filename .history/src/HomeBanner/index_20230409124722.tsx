import React from "react"
import { Box, Grid, Button, Typography } from "@mui/material"
import { styled } from "@mui/system"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"

const options = [
  { name: "Document 1", icon: <TextSnippetIcon />, href: "#" },
  { name: "Document 2", icon: <TextSnippetIcon />, href: "#" },
  { name: "Document 3", icon: <TextSnippetIcon />, href: "#" },
]

const LeftPart = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}))

const RightPart = styled(Box)({
  background: "url('https://via.placeholder.com/600x400') no-repeat center center",
  backgroundSize: "cover",
})

const Option = ({ option }) => (
  <Box textAlign="center" mb={2} display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"}>
    {option.icon}
    <Typography>{option.name}</Typography>
    <Button variant="outlined" color="secondary" href={option.href}>
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
    </div>
  )
}

export default HomeBanner
