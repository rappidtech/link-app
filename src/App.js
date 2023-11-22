import './App.css';
import Logo from './components/Logo/Logo.js';
import Enlaces from './components/Enlaces/Enlaces.js';
import Footer from './components/Footer/Footer.js';
import Subtitulo from './components/Subtitulo/Subtitulo.js';
import Titulo from './components/Titulo/Titulo.js';
import Redes from './components/Redes/Redes.js';
import data from './data.json';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo src={data.logo} link={data.enlacePrincipal}/>
                <Titulo text={data.titulo}/>
                <Subtitulo text={data.subtitulo}/>
            </header>
            <main>
                <Enlaces links={data.enlaces} />  
            </main>
            <footer>
                <div className='redes-container'>
                    <Redes redes={data.redes} />
                </div>
                <div className='footer-container'>
                    <Footer poweredBy={data.poweredBy} link={data.enlaceRappid}/>
                </div>
            </footer>
        </div> 
    );
}  

export default App;
