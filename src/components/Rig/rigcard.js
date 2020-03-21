import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center'
  },
  media: {
    height: 356,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
      <div className="container" style={{textAlign: 'center'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.mos.cms.futurecdn.net/awbNCoAKzzUB8Vjy8e7RB7-1200-80.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="h2" color="textSecondary" component="p">
           Processor   {props.cpu}
          </Typography>
          <Typography variant="h2" color="textSecondary" component="p">
           Graphic Card   {props.gpu}
          </Typography>
          <Typography variant="h2" color="textSecondary" component="p">
            Memory   {props.ram}
          </Typography>
          <Typography variant="h2" color="textSecondary" component="p">
            Hard Disk Space   {props.hd}
          </Typography>
          <Typography variant="h2" color="textSecondary" component="p">
            Operating System  {props.os}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
