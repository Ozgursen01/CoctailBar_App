import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';



function CheckBoxesAlcoholic({ item,handleAlcolChange}) {
    

 
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">filtreleme</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={item.selected} onChange={(event)=>handleAlcolChange(event,item.strAlcoholic)} name="gilad"  />
            }
            label={item.strAlcoholic}
          />
        </FormGroup>
        
      </FormControl>
     
    </Box>
  );
}
export default CheckBoxesAlcoholic;