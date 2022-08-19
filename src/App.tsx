import Header from "./components/Header";
import Box from "./components/Box";
import Banner from "./assets/images/ilustra-banner.png";
import "./styles/global.css";
function App() {
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
              <button className="button" onClick={sendEmail}>
                Quero saber mais{" "}
              </button>
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
    </div>
  );
}

export default App;
