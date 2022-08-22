import Header from "../../components/Header";
import Box from "../../components/Box";
import Banner from "../../assets/images/ilustra-banner.png";
import "../../styles/global.css";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

function Home() {
  const sendEmail = () => {
    alert("Email enviado com sucesso");
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Box background="claro">
          <div>
            <div>
              <h1> Educação Financeira é tudo de bom</h1>
              <p> Vem comigo que te mostro por onde começar</p>
              <Button sendEmail={sendEmail}>Quero saber mais</Button>
            </div>
            <div>
              <img src={Banner} alt="banner" />
            </div>
          </div>
        </Box>
        <Box background="escuro">
          <p> teste</p>
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
