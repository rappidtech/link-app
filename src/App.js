import './App.css';
import Logo from './components/Logo.js';
import Enlaces from './components/Enlaces.js';
import Footer from './components/Footer.js';
import Subtitulo from './components/Subtitulo.js';
import Descripcion from './components/Descripcion.js';
import Titulo from './components/Titulo.js';
import Redes from './components/Redes.js';
import BotonCompartir from './components/Compartir.js';
import TarjetaCompartir from './components/MenuCompartir.js';
import ContactBanner from './components/ContactBanner.js';
import data from './edits/data.json';
import styled from 'styled-components';
import styles from './edits/styles.json';
import { useState } from "react";


const { general, footer } = styles;
const fondoApp = general.backgroundColor;
const fondoFooter = footer.backgroundColor;
const height = footer.height


const AppContainer = styled.div`
    background-image: ${fondoApp};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    
    const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

    const toggleTarjeta = () => {
        setMostrarTarjeta(!mostrarTarjeta);
    };

    return (
        <>
            <TarjetaCompartir mostrar={mostrarTarjeta} onCerrar={toggleTarjeta} />
            <AppContainer className="App">
                <div>
                    <BotonCompartir onToggle={toggleTarjeta} />
                </div>
                <div>
                    <ContactBanner/>
                </div>
                
                <header className="App-header">
                    <Logo src={data.logo} link={data.enlacePrincipal}/>
                    <Titulo text={data.titulo}/>
                    <Subtitulo text={data.subtitulo}/>
                </header>
                <main>
                    <Descripcion text={data.descripcion}></Descripcion>
                    <Enlaces links={data.enlaces} />  
                </main>
                <FooterContainer>
                    <Redes redes={data.redes} />
                    <Footer poweredBy={data.poweredBy} link={data.enlaceRappid}/>
                </FooterContainer>
            </AppContainer> 
        </>
    );
}  

export default App;
