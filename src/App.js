import './App.css';
import Logo from './components/Logo.js';
import Enlaces from './components/Enlaces.js';
import Footer from './components/Footer.js';
import Subtitulo from './components/Subtitulo.js';
import Titulo from './components/Titulo.js';
import Redes from './components/Redes.js';
import data from './edits/data.json';
import styled from 'styled-components';
import styles from './edits/styles.json';

const { general, footer } = styles;
const fondoApp = general.backgroundColor;
const fondoFooter = footer.backgroundColor;
const height = footer.height


const AppContainer = styled.div`
    background-color: ${fondoApp};
`

const FooterContainer = styled.footer`
    background-color: ${fondoFooter};
    display: flex;
    width: 100%;
    flex-direction: column;
    height: ${height};
    align-items: center;
    justify-content: center;

`

function App() {
    return (
        <AppContainer className="App">
            <header className="App-header">
                <Logo src={data.logo} link={data.enlacePrincipal}/>
                <Titulo text={data.titulo}/>
                <Subtitulo text={data.subtitulo}/>
            </header>
            <main>
                <Enlaces links={data.enlaces} />  
            </main>
            <FooterContainer>
                <Redes redes={data.redes} />
                <Footer poweredBy={data.poweredBy} link={data.enlaceRappid}/>
            </FooterContainer>
        </AppContainer> 
    );
}  

export default App;
