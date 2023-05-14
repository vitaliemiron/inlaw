import styled from "@emotion/styled"
import { Container as MuiContainer, Typography, Button } from "@mui/material"
import Link from "next/link"

const Container = styled.div`
  padding: 20px 0;
`

export const HomeBanner = () => {
  return (
    <Container>
      <MuiContainer>
        <Typography variant="h2" component="h2" gutterBottom>
          Obține consultanță juridică
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          Întreabă un avocat gratuit și fără programare
        </Typography>
        <Link href="/questions">
          <Button type="button" variant="outlined">
            Adresează o intrebare
          </Button>
        </Link>
      </MuiContainer>
    </Container>
  )
}
