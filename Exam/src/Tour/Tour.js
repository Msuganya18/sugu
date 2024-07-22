import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Tour/Tour.css'

export default function MediaCard() {
  return (
    <>
    <div>
    <h1> TOUR PACKAGES </h1>
<div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="public\Img\Goa.jpg"
        title="Goa"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Goa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "Goa: Where the sun, sea, and serenity come together."
        A place to live in the moment."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>



    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Dubai"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dubai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Dubai, the city that never stops shining.” “Wandering the streets of Dubai.”
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


<div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}></div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Mexico"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mexico
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “I love Mexico and all things Mexican. I love the food, the culture, the history, and the people.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>


    <div style={{display:"flex",justifyContent:"space-evenly"}}>
   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Paris"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paris
        </Typography>
        <Typography variant="body2" color="text.secondary">
        you’ll have to fall in love at least once in your life, or Paris has failed to rub off on you
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
</div>


<div style={{display:"flex" , justifyContent:"space-evenly"}}>

<div style={{display:"flex",justifyContent:"space-evenly"}}>
<Card sx={{ maxWidth: 345,  marginTop: 5}}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="London"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          London
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “From London with love.” “Falling hard for London.” “London, baby!” 

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

   
    <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        sx={{ height: 140  }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Switzerland"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Switzerland
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Switzerland is a small, steep country, much more up and down than sideways."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    
    



    <div style={{display:"flex",justifyContent:"space-evenly"}}>

    <Card sx={{ maxWidth: 345,  marginTop: 5}}>
      <CardMedia
        sx={{ height: 140 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Thailand"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Thailand
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “It does not matter how slowly you go as long as you do not stop.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        sx={{ height: 140  }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="/src/images/Goa.jpg"
        title="Iceland"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          IceLand
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Even the geese in Iceland are too cool for school.“Iceland: where even the rocks have character.”
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    
</div>
</div>
</div>

</>


 );
}