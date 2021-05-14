import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles  = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    fontSize:"1.5em"
  },
  button: {
      fontSize: "0.5em",
  }
});


export default function Project(props) {

  const classes = useStyles();
  const img_base = "images/projects/"

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img_base+props.img}
          title="Avada"
        />
        <CardContent>
          <h5>{props.name}</h5>
          <p>{props.desc}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
            className={classes.button}
            size="small" 
            color="primary" 
            onClick={()=>window.open(props.link,'_blank')}>
          {props.status}
        </Button>
      </CardActions>
    </Card>
  );
}