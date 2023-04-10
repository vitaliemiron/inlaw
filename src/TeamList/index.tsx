import styled from "@emotion/styled"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"

const teamMembers = [
  {
    id: 1,
    photo: "/photo-team.jpg",
    jobTitle: "Consultant juridic",
    description:
      "Specialist în drept, doctor la USM, specialist în științe juridice civile și administrative",
    email: "email1@example.com",
  },
  {
    id: 2,
    photo: "/photo-team.jpg",
    jobTitle: "Consultant juridic",
    description:
      "Specialist în drept, doctor la USM, specialist în științe juridice civile și administrative",
    email: "email1@example.com",
  },
  {
    id: 3,
    photo: "/photo-team.jpg",
    jobTitle: "Consultant juridic",
    description:
      "Specialist în drept, doctor la USM, specialist în științe juridice civile și administrative",
    email: "email1@example.com",
  },
  {
    id: 4,
    photo: "/photo-team.jpg",
    jobTitle: "Consultant juridic",
    description:
      "Specialist în drept, doctor la USM, specialist în științe juridice civile și administrative",
    email: "email1@example.com",
  },
  {
    id: 5,
    photo: "/photo-team.jpg",
    jobTitle: "Consultant juridic",
    description:
      "Specialist în drept, doctor la USM, specialist în științe juridice civile și administrative",
    email: "email1@example.com",
  },
  // ... add 3 more team members
]

const Wrapper = styled.div``

const TeamMemberContainer = styled(Paper)`
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
`

const TeamMember = ({ photo, jobTitle, description, email }) => {
  return (
    <TeamMemberContainer>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Avatar src={photo} alt={jobTitle} sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">{jobTitle}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="subtitle1">{email}</Typography>
        </Grid>
      </Grid>
    </TeamMemberContainer>
  )
}

export const TeamList = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h6" align="center">
          Echipa InLaw este formată din specialiști în drept, consultanți juridici, avocați
          calificați. Mai jos vedeți profilurile membrilor echipei InLaw.{" "}
        </Typography>
      </Container>
      <Container>
        <Box>
          <Typography variant="h4">Echipa noastra</Typography>
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              photo={member.photo}
              jobTitle={member.jobTitle}
              description={member.description}
              email={member.email}
            />
          ))}
        </Box>
      </Container>
    </Wrapper>
  )
}

export default TeamList
