import './App.css';
import Cards from './Components/Card/Card';
import Navbar from './Components/NavBar/Nav';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'

const consultorios = [
{
    "nombre": 'Santa Barbara',
    "telefono": 1162376187,
    "direccion":'Corredor Bancalari 3901, 2° piso, Oficina 31',
    "mapa":'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.2081099411503!2d-58.63538022341724!3d-34.44686474923292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca4f05d213303%3A0xf84e698b5627abd3!2sPaseo%20Santa%20Barbara!5e0!3m2!1ses!2sar!4v1740509309906!5m2!1ses!2sar'
},
{
  "nombre": 'CENEC',
  "telefono":'1158900346',
  "direccion":'Alvear 331, Martinez',
  "mapa":'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.59899746956!2d-58.499134823415744!3d-34.48769565138157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1a625545383%3A0xa0d3a1ac883731ae!2sGral.%20Alvear%20331%2C%20B1640%20Mart%C3%ADnez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1740508858626!5m2!1ses!2sar'
},
{
  "nombre": 'Centro Medico Quirurgico',
  "telefono": 1125560078,
  "direccion": 'Fondo de la legua 856',
  "mapa": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.1471626829853!2d-58.544889223415225!3d-34.49915325198497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb063574e45c1%3A0x35c692b1786a2e73!2sAv.%20Fondo%20de%20la%20Legua%20856%2C%20B1640%20Villa%20Adelina%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1740572047663!5m2!1ses!2sar'
},
{
  "nombre": 'Pilar Point',
  "telefono": '1132883989',
  "direccion": 'Estanislao Lopez 538, Pilar',
  "mapa":'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.905003717706!2d-58.91490972341703!3d-34.45455924963761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9cd0d8850079%3A0x15f05e7db1f2251c!2sCentro%20Comercial%20Pilar%20Point!5e0!3m2!1ses!2sar!4v1742819490760!5m2!1ses!2sar'
}
];

function App() {

  useEffect(() => {
    document.title = 'ECOSOUND';
    
  }, []);

  return (
    <div className="App">
        <Navbar></Navbar>
        <div className='home'>
  
        </div>
        
        <div className='quienes'>
            <img alt='logo' className='logosolo' src='./images/logo solo.png' />
            <h1>ECOSOUND</h1>
            <h3>Somos un equipo de profesionales dedicados a realizar ecografías en distintos consultorios de Zona Norte.</h3>
        </div>

        <div className='consultorio'>
          <h2 id='consultorios'>CONSULTORIOS</h2>

          <div className='consultoriosContainer'>
            {consultorios.map((consultorio) => {return (<Cards className='card' data={consultorio}></Cards>)})}
          </div>
        </div>
        
        <h2>COBERTURAS</h2>

        <div className='coberturas' id='coberturas'>
          
          <img alt='galeno' src='./images/coberturas/galeno.jpg'></img>
          <img alt='omint' src='./images/coberturas/omint.webp'></img>
          <img alt='sancor' src='./images/coberturas/sancor.png'></img>
          <img alt='swiss' src='./images/coberturas/swiss.jpg'></img>
          <img alt='osde' src='./images/coberturas/osde.jpg'></img>
          <img alt='medife' src='./images/coberturas/medife.webp'></img>
          <img alt='medicus' src='./images/coberturas/medicus.png'></img>
          <img alt='bristol' src='./images/coberturas/bristol.jpg'></img>
          <img alt='william hope' src='./images/coberturas/whope.png'></img>
        </div>

        <div className='contacto'>
          <h2 id='contacto'>CONTACTO</h2>

          <div className='form container'>
            <form action="https://formspree.io/f/xwplpwpl" method="POST">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label for="phone">Celular:</label>
                    <input type="number" id="phone" name="phone" required />

                    <label for="cobertura">Cobertura:</label>
                    <input type="twxt" id="cobertura" name="cobertura" required />

                    <label for="message">Mensaje:</label>
                    <textarea id="message" name="message" cols="50" rows="5" required />
                    <br></br>
                    <Button type='submit' sx={{display:'inline-block', margin:'1em', width:'25%', backgroundColor:'rgb(53, 53, 206)'}}variant="contained" endIcon={<SendIcon sx={{display:'inline-block', height:'15px'}} />}>
                      Enviar
                    </Button>
            </form>
            </div>
        </div>
    </div>
  );
}

export default App;