import styled from "@emotion/styled"
import { FC, ReactNode } from "react"
import Link from "next/link"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 50px;
  padding-top: 20px;
  padding-bottom: 20px;

  .left,
  .info {
    background-color: #eee4e3;
    padding: 20px;
  }

  ul {
    list-style: none;
    font-size: 22px;
  }

  li {
    padding: 5px;
  }

  .info {
    font-size: 20px;
    line-height: 1.8;
  }

  .info .title {
    margin-bottom: 15px;
  }

  a:hover {
    color: #000;
  }
`

export const AnswersContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <div className="left">
        <ul>
          <li>
            <Link href="/answers">Drept Civil</Link>
          </li>
          <li>
            <Link href="/answers/penal">Drept Penal</Link>
          </li>
          <li>
            <Link href="/answers/vamal">Drept Vamal</Link>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
      <div className="info">
        <div className="title">Cum aflu mai multe detalii la întrebarea mea?</div>{" "}
        <div>
          Pagina răspunsuri este inspirată din întrebările adresate de dvs. din diferite ramuri de
          drept. Raspunsul este unul general conform legislației în vigoare. Pentru a obține un
          raspuns mai concret și apropiat problemei dumneavoastră juridice vă îndemnăm să luați
          legătura cu unul din consultanți noștri juridici sau sa ne expediați un email la adresa
          indicată la subsolul paginii.
        </div>
      </div>
    </Container>
  )
}
