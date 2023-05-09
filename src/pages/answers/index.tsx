import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { AnswersContent } from "src/Answers"
import { Info } from "src/Info"

const Answers: BlitzPage = () => {
  return (
    <div>
      <AnswersContent>
        <div>
          <h2>Dreptul Civil:</h2>
          <h3>Moștenirea:</h3>

          <ol>
            <li>
              <p>Ce este moștenirea și care sunt tipurile de moștenire?</p>
              <p>
                Moștenirea este transmiterea patrimoniului (masa succesorală) unei persoane fizice
                decedate (defunct, cel care a lăsat moștenirea) către una sau mai multe persoane
                (moștenitori).
              </p>
              <p>Moștenirea poate fi testamentară și legală.</p>
              <p>Moștenirea testamentară are loc în baza testamentului.</p>
              <p>
                Moștenirea legală are loc în baza prevederilor oferite de Codul Civil al Republicii
                Moldova, articolele 2177-2190.
              </p>
            </li>
            <li>
              <p>Care este locul și timpul deschiderii moștenirii?</p>
              <p>Articolul 2165. Momentul deschiderii moștenirii</p>
              <p>
                Moștenirea se deschide la momentul decesului celui care a lăsat moștenirea, fie că
                este fizic constatat, fie că este declarat prin hotărîre judecătorească definitivă.
              </p>
              <p>Articolul 2166. Locul deschiderii moștenirii</p>
              <p>
                Locul deschiderii moștenirii este locul unde cel care a lăsat moștenirea își avea
                reședința obișnuită în momentul decesului, iar dacă această reședință obișnuită nu
                este cunoscută, locul de aflare a bunurilor sau a părții principale a acestora ca
                valoare.
              </p>
            </li>
            <li>
              <p>Care sunt Clasele de moștenitori legali?</p>
              <p>Potrivit articolelor 2178-2182 există 5 clase de moștenitori legali.</p>
              <p>
                Clasa1: Fac parte din clasa întîi de moștenitori legali descendenții defunctului.
                Copii și Nepoții.
              </p>
              <p>
                Clasa2: Fac parte din clasa a doua de moștenitori legali părinții defunctului și
                descendenții acestora. Frații și Surorile defunctului.
              </p>
              <p>
                Clasa3: Fac parte din clasa a treia de moștenitori legali bunicii și bunicile
                defunctului și descendenții acestora. Unchii și Mătușile.
              </p>
              <p>
                Clasa4: Fac parte din clasa a patra de moștenitori legali străbunicii defunctului și
                descendenții acestora.
              </p>
              <p>
                Clasa5: Fac parte din clasa a cincea de moștenitori legali strămoșii mai îndepărtați
                ai defunctului și descendenții acestora.
              </p>
            </li>
            <p>4) Care sunt drepturile succesorale ale soțului supraviețuitor?</p>

            <p>Articolul 2185. Drepturile succesorale ale soțului supraviețuitor</p>
            <ol>
              <li>
                Soțul supraviețuitor este moștenitor legal și, în concurs cu clasa întîi de
                moștenitori, are dreptul la 1/4 din masa succesorală, indiferent de numărul
                descendenților.
              </li>
              <li>
                În concurs cu clasa a doua de moștenitori sau cu bunicii, soțul supraviețuitor are
                dreptul la 1/2 din masa succesorală, indiferent de numărul moștenitorilor. Dacă sînt
                în viață atît bunicii, cît și descendenții bunicilor, soțul supraviețuitor primește
                cota și din cealaltă cotă succesorală de 1/2 care, conform art. 2180, ar fi trebuit
                să revină descendenților.
              </li>
              <li>
                Stabilirea cotei succesorale a soțului supraviețuitor se face cu preferință față de
                stabilirea cotelor succesorale ale moștenitorilor cu care acesta concurează.
              </li>
              <li>
                În lipsa moștenitorilor de clasa întîi și a doua și dacă bunicii nu sînt în viață
                sau dacă aceștia au decăzut din dreptul la moștenire, soțul supraviețuitor culege
                întreaga moștenire.
              </li>
            </ol>

            <h2>5) Care sunt principalele caracteristici ale unui testament?</h2>

            <p>Articolul 2216. Forma testamentului</p>
            <ol>
              <li>
                Sub sancțiunea nulității, testamentul poate fi întocmit doar în una din formele
                prevăzute la prezentul capitol.
              </li>
              <li>
                Un testament nul din cauza unui viciu de formă produce efecte dacă îndeplinește
                condițiile prevăzute de lege pentru altă formă testamentară.
              </li>
            </ol>

            <p>Articolul 2217. Redactarea testamentului</p>
            <ol>
              <li>
                Testamentul poate fi redactat de către testator personal sau, la cererea acestuia,
                de către notar ori de către persoanele abilitate cu autentificarea testamentului.
              </li>
              <li>
                Testamentul redactat de către notar sau persoanele abilitate cu asemenea funcții
                trebuie să exprime manifestarea de voință a testatorului și să fie semnat de
                testator numai după ce acesta a luat cunoștință de conținutul testamentului.
              </li>
            </ol>

            <p>Articolul 2218. Semnarea testamentului de către alte persoane</p>
            <li>
              Dacă testatorul nu poate semna testamentul, atunci, la solicitarea lui, testamentul va
              fi semnat, în prezența a doi martori, de o altă persoană a cărei identitate se
              stabilește de către notar. În testament se vor indica motivul nesemnării de către
              testator a testamentului, numele, prenumele, domiciliul persoanei care a semnat
              testamentul, precum și actul de identitate al acesteia.
            </li>
            <p>
              (2) Persoana care asistă în calitate de martor și persoana care este avantajată prin
              testament nu pot semna testamentul în numele testatorului
            </p>
            <p>6) Ce reprezintă un testament olograf și care sunt condițiile de valabilitate?</p>
            <p>Articolul 2223. Testamentul olograf</p>
            <ol>
              <li>
                Testatorul poate întocmi în mod personal testamentul prin declarație scrisă și
                subsemnată de el (testament olograf).
              </li>
              <li>
                Testatorul trebuie să menționeze în testament data (ziua, luna și anul) în care a
                scris testamentul.
              </li>
              <li>
                Semnătura va conține prenumele și numele de familie ale testatorului. Dacă
                testatorul semnează în alt mod și această semnătură este suficientă pentru
                stabilirea identității sale și a seriozității declarației testatorului, atunci o
                asemenea semnătură nu afectează valabilitatea testamentului.
              </li>
              <li>
                Persoana care nu știe să citească nu poate întocmi un testament conform
                dispozițiilor alin. (1)-(3).
              </li>
              <li>
                Testamentul întocmit conform alin. (1) care nu conține data întocmirii, generînd
                astfel îndoieli cu privire la valabilitatea sa, se consideră valabil numai dacă
                stabilirea momentului întocmirii este posibilă în alt mod.
              </li>
              <li>
                Ștersăturile, modificările sau completările care aparțin testatorului trebuie datate
                și semnate de către testator dacă ele cuprind dispoziții testamentare noi față de
                redactarea inițială.
              </li>
            </ol>
          </ol>
        </div>
      </AnswersContent>
    </div>
  )
}

Answers.getLayout = (page) => <Layout>{page}</Layout>
export default Answers
