import './card.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({data}) {
    const { nombre, telefono, direccion, mapa } = data;
  let telefonos = `https://wa.me/549${telefono}`
  return (
    
    <Card className='card' sx={{borderRadius:'15px', fontFamily: 'Gill Sans', width:'300px'}}>
        <iframe title={nombre} src={mapa}></iframe>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography className='direccion' variant="body2" sx={{ color: 'text.secondary', fontSize:'15px' }}>
          Direccion: {direccion}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Telefono: {telefono}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'center'}}>`
        <Button size="small" href={telefonos} >Solicitar turno</Button>
      </CardActions>
    </Card>
  );
}

