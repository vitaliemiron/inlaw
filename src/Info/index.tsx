import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import styled from "@emotion/styled"
import { Container } from "@mui/material"

const InfoSection = styled(Paper)`
  padding: 100px 0;
  margin-bottom: 16px;
  background-image: linear-gradient(rgba(228, 210, 210, 0.5), rgba(211, 189, 189, 0.5)),
    url("/info-bg.png");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Info = () => {
  return (
    <InfoSection>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="h5">Inlaw</Typography>
            <Typography variant="body1">
              Serviciul de consultanță juridică InLaw este echivalentul serviciilor unui cabinet de
              avocatură și consiliere juridică îndreptat spre mediul online. InLaw oferă servicii de
              consiliere juridică gratuită și cu plată. Puteți accesa rubrica Întrebări pentru a
              adresa o întrebare, răspui arhiva cu Răspunsuri, vizualiza CV- urile juriștilor,
              puteți crea un profil pentru a lua legătura directă cu un consilier juridic. De
              asemenea InLaw oferă acces către diverse modele de acte juridice care pot servi ca
              model în situațiile necesare.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Servicii</Typography>
            <Box>
              <Typography variant="body2">-drept civil</Typography>
              <Typography variant="body2">-drept penal</Typography>
              <Typography variant="body2">-drept financiar</Typography>
              <Typography variant="body2">-dreptul muncii</Typography>
              <Typography variant="body2">-dreptul administrativ</Typography>
              <Typography variant="body2">-dreptul familiei</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </InfoSection>
  )
}
