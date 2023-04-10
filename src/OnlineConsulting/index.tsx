import styled from "@emotion/styled"
import Chat from "src/core/Chat"

const Container = styled.div`
  center {
    font-size: 24px;
    padding: 25px 0;
  }
`

export const OnlineConsulting = () => {
  return (
    <Container>
      <center>Consultatie gratuita ONLINE</center>
      <Chat />
    </Container>
  )
}
