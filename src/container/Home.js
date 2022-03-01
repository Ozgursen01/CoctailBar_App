import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import CocktailCard from '../components/CocktailCard';
import { Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxesCategory from '../components/CheckBoxesCategory';
import CheckBoxesAlcoholic from '../components/CheckBoxesAlcoholic';




function Home() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [alcoholic, setAlcoholic] = useState();
  const [filterData, setFilterData] = useState();
  


  useEffect(() => {
    allNews();
    allCategory();
    allAlcoholic();
  
  }, []);


  const allNews = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then(res => {
        setData(res.data.drinks);
        setFilterData(res.data.drinks)
      })
      .catch(err => console.log(err))

  }
  const allCategory = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then((res) => {
      const categories = res.data.drinks.map((category) => ({ ...category, selected: false }));
      setCategory(categories);
    }).catch((err) => console.log(err))
  }
  const allAlcoholic = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list").then((res) => {
      const alcoholics = res.data.drinks.map((alcoholics) => ({ ...alcoholics, selected: false }));
      setAlcoholic(alcoholics)

    }).catch((err) => console.log(err))
  }

  useEffect(() => {
    if (category === undefined || data === undefined || alcoholic===undefined )
      return;

    const selectedCategory = category.filter((item) => item.selected).map((item) => item.strCategory);
    const selectedAlcoholic=alcoholic.filter((item)=>item.selected).map((item)=>item.strAlcoholic)
 
    let filterData = data;
    if (selectedCategory.length > 0) {
      filterData = filterData.filter((item) => selectedCategory.includes(item.strCategory));
    } 
    if(selectedAlcoholic.length>0){
      filterData=filterData.filter((item)=>selectedAlcoholic.includes(item.strAlcoholic));
    }
   
    setFilterData(filterData);
    

  }, [category, alcoholic])

  const handleChange = (event, strCategory) => {
    let newData = category.map((item) => {
      if ((item.strCategory === strCategory)) {
        return {
          ...item,
          selected: event.target.checked
        }
      }
      return item
    });
    setCategory(newData);
  }
  const handleAlcolChange = (event, strAlcoholic) => {
    let newData = alcoholic.map((item) => {
      if ((item.strAlcoholic === strAlcoholic)) {
        return {
          ...item,
          selected: event.target.checked
        }
      }
      return item
    });
    setAlcoholic(newData);

  }
  
  if (category == undefined || alcoholic == undefined || filterData == null )
    return true;

  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Category Filter</h3></Typography>
        </AccordionSummary>
        <Grid container>
          {category ? category.map((item,i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <CheckBoxesCategory
                item={item}
                handleChange={handleChange}
              />
            </Grid>
          )) : null}

        </Grid>
      </Accordion><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Alcoholic Filter</h3></Typography>
        </AccordionSummary>
        <Grid container>
          {alcoholic ? alcoholic.map((item,i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <CheckBoxesAlcoholic
                item={item}
                
                handleAlcolChange={handleAlcolChange}
              />
            </Grid>
          )) : null}

        </Grid>
      </Accordion>
      
      <Grid container>
        {
          filterData ? filterData.map((note) => {
            return (
              <Grid item key={note.idDrink} xs={12} md={6} lg={4}>
                <CocktailCard note={note} />
              </Grid>)
          }) : null
        }

      </Grid>
    </Container>
  )
}
export default Home;