import React from "react"
import { Box, Grid, Button, Typography } from "@mui/material"
import { styled } from "@mui/system"
import GetAppIcon from "@mui/icons-material/GetApp"

const options = [
  { name: "Document 1", icon: <GetAppIcon />, href: "#" },
  { name: "Document 2", icon: <GetAppIcon />, href: "#" },
  { name: "Document 3", icon: <GetAppIcon />, href: "#" },
]

const LeftPart = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
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
  <Box textAlign="center" mb={2}>
    {option.icon}
    <Typography>{option.name}</Typography>
    <Button variant="contained" color="secondary" href={option.href}>
      Download
    </Button>
  </Box>
)

const HomeBanner = () => {
  return (
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
  )
}

export default HomeBanner
