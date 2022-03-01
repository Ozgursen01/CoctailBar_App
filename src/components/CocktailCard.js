import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function CocktailCard({ note }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={note.strDrink}
        subheader="Burası henüz boş"
      />
      <CardMedia
        component="img"
        height="200"
        image={note.strDrinkThumb}
        alt="Burası Card Media"
      />
      <CardContent>
        <Typography component={'span'} variant="body2" color="text.secondary">
         <h4>EN:</h4>{note.strInstructions}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph component={'span'} variant={'body2'}>Cocktail Description :</Typography>
          <Typography paragraph component={'span'} variant={'body2'}>
            <h4>Cocktail Type : {note.strCategory}</h4>
           <li>{note.strAlcoholic}</li>
           <li>{note.strGlass}</li>
           <h4>Ingredient</h4>
           {note.strIngredient1? <li>{note.strIngredient1}</li>:null}
           {note.strIngredient2? <li>{note.strIngredient2}</li>:null}
           {note.strIngredient3? <li>{note.strIngredient3}</li>:null}
           {(note.strIngredient4===null)? null:<li>{note.strIngredient4}</li>}
           <h4>Measure</h4>
           {note.strMeasure1? <li>{note.strMeasure1}</li>:null}
           {note.strMeasure2? <li>{note.strMeasure2}</li>:null}
           {note.strMeasure? <li>{note.strMeasure3}</li>:null}
           {(note.strMeasure4===null)? null:<li>{note.strMeasure4}</li>}
          </Typography>
          <Typography paragraph component={'span'} variant={'body2'}>
          <h4>DE:</h4>{note.strInstructionsDE}
          </Typography>
          <Typography paragraph component={'span'} variant={'body2'}>
          <h4>IT:</h4>{note.strInstructionsIT}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default CocktailCard;