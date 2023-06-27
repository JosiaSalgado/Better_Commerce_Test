import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Box, Typography} from '@mui/material';

import '../stylesheets/home.css'
import Spinner from './Spinner';



const handleHover = index => {
	const description = document.getElementById(`description-${index}`);
	if (description) {
		description.style.display = 'block';
	}
};

const handleHoverOut = index => {
	const description = document.getElementById(`description-${index}`);
	if (description) {
		description.style.display = 'none';
	}
};

const CharacterList = (props) => {
	return (
		<Grid container spacing={2} sx={{ marginTop: '20px' }}>
			{props.characters?.results === undefined ? (
				<Spinner />
			) : (
				props.characters.results.map((box, index) => (
					<Grid key={box.id} item xs={12} sm={6} md={4} lg={3}>
						<Link style={{ textDecoration: 'none' }} to='/character' state={{
							charaName: box.name,
							charaSpecies: box.species,
							charaImage: box.image
						}}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									padding: '16px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									minHeight: '200px',
									transition: 'all 0.3s ease',
									color: '#fff',
									cursor: 'pointer',
									'&:hover': {
										transform: 'scale(1.03)',
									},
								}}
								onMouseEnter={() => handleHover(index)}
								onMouseLeave={() => handleHoverOut(index)}
							>

								<img
									className='character-img'
									src={box.image}
									alt="Imagen"
								/>


								<Typography variant="h6" sx={{ textAlign: 'start', marginTop: '10px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
									{box.name}
								</Typography>


								<div className='character-box' id={`description-${index}`} style={{display: 'none'}}>
									<section className='characterInfo-section'>
										<p><strong>Status:</strong> <span style={{ color: box.status === 'Alive' ? '#04fa1b' : '#ff0000' }}>{box.status}</span></p>
										<p><strong>Specie:</strong> {box.species}</p>
										<p><strong>Gender:</strong> {box.gender}</p>
										<p className='origin-text'><strong>Origin:</strong> {box.origin.name}</p>
									</section>

								</div>
							</Box>
						</Link>
					</Grid>
				))
			)}
		</Grid>
	)
}

export default CharacterList