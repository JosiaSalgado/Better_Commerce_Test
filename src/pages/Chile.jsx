import React from 'react'
import { useEffect, useState } from 'react'
import { getRegions, getCommunes } from '../api/chileApi'
import { Container, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';


const Chile = () => {

  const [region, setRegion] = useState(); 
  const [communes, setCommunes] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("#");
  const [selectedCommune, setSelectedCommune] = useState("#"); 


  function sortCommunesByRegion(regionId) {
    setSelectedCommune('#');
    setSelectedRegion(regionId);
    getCommunes(`http://127.0.0.1:15000/api/communes/${regionId}`)
      .then(data => setCommunes(data))
  }


  useEffect(() => {
    getRegions('http://127.0.0.1:15000/api/regions')
      .then(data => setRegion(data));
  }, [])


  return (

    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', margin: '30px 70px' }}>
        <Link style={{ color: '#1482ff', textDecoration: 'none' }} to="/">
          Home
        </Link>

        <Typography sx={{ color: '#b6b6b6' }}>Character</Typography>
      </Breadcrumbs>

      <Container sx={{ height: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center'}}>

      
        <FormControl sx={{ width: '250px' }}>
          <InputLabel sx={{ color: '#fff' }}>Choose Region</InputLabel>
          <Select
            sx={{ border: '1px solid #fff', color: '#fff' }}
            labelId="regionSelect"
            id="regionSelect"
            value={selectedRegion}
            onChange={e => sortCommunesByRegion(e.target.value)}
          >
            <MenuItem value="#" selected disabled>Select</MenuItem>

            {region?.map(i => (
              <MenuItem value={i.id} key={i.id}>{i.region}</MenuItem>
            ))}

          </Select>
        </FormControl>


        <FormControl sx={{ width: '250px', marginLeft: '10px' }}>
          <InputLabel id="communeSelect" sx={{ color: '#fff' }}>Choose Commun</InputLabel>
          <Select
            sx={{ border: '1px solid #fff', color: '#fff' }}
            labelId="communeSelect"
            id="mySelect"
            value={selectedCommune}
            onChange={e => setSelectedCommune(e.target.value)}
          >
            <MenuItem sx={selectedRegion === '#' ? { display: 'block' } : { display: 'none' }} disabled value="#">Select a region first</MenuItem>

            {communes?.map(i => (
              <MenuItem value={i.id} key={i.id}>{i.commune}</MenuItem>
            ))}

          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default Chile