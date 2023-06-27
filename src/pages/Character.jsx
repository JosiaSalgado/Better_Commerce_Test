import * as React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';



const styles = {

  container: {
    marginTop: '2rem',
    height: 'auto',
    paddingBottom: '30px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  },
  infoContainer: {
    padding: '2rem',
  },
};

const Character = () => {

  const location = useLocation()
  const {charaName, charaSpecies, charaImage} = location.state


  return (
    <Container sx={styles.container}>

      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb"  sx={{color: '#fff'}}>
          <Link style={{color: '#1482ff', textDecoration: 'none'}} to="/">
            Home
          </Link>
         
          <Typography sx={{color: '#b6b6b6'}}>Character</Typography>
        </Breadcrumbs>
      </div>



      <Grid sx={{marginTop: '30px'}} container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={styles.imageContainer}>
            <img
              src={charaImage}
              alt="Character"
              style={styles.image}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={styles.infoContainer}>
            <Typography variant="h4" gutterBottom>
              {charaName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Species: {charaSpecies}
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam aspernatur similique neque voluptatibus unde quod ipsam non qui quis officiis numquam reprehenderit, aliquam, aperiam eveniet quia eaque autem molestiae?
              Blanditiis praesentium vel modi reprehenderit, nesciunt laboriosam repellat corporis error, delectus eum, voluptas impedit alias quia eos sunt. Excepturi ea fugiat necessitatibus voluptates numquam quia voluptatum aperiam voluptas corporis quam.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Character;