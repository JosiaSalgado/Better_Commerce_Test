import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/rickandmortyApi';

import { Container, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../stylesheets/home.css';
import Spinner from '../components/Spinner';
import CharacterList from '../components/characterList';

const theme = createTheme({
	components: {
		MuiPagination: {
			styleOverrides: {
				root: {
					'& .MuiPaginationItem-root': {
						color: '#fff',
						borderColor: '#fff'
					},
				},
			},
		},
	},
});


function Home() {
	const [characters, setCharacters] = useState(null);
	const [page, setPage] = useState(1);
	const [sortStatus, setSortStatus] = useState('');
	const [sortGender, setSortGender] = useState('');



	function getCharactersByName(name) {
		getCharacters(`https://rickandmortyapi.com/api/character/?name=${name}`)
			.then(data => {
				if (data && data.results?.length > 0) {
					setCharacters(data);
				}
			})
			.catch(error => {
				if (error.response && error.response.status === 404) {
					console.log('Error 404: Not Found');
				} else {
					console.error(error);
				}
			});

	}

	function getCharacterBySort() {
		getCharacters(`https://rickandmortyapi.com/api/character/?status=${sortStatus}&gender=${sortGender}`)
			.then(data => setCharacters(data));
	}




	const handleChange = (event, value) => {
		setPage((page - page) + value);
	};



	useEffect(() => {
		getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`)
			.then(data => setCharacters(data))
	}, [page]);


	return (
		<>
			<Container sx={{ marginTop: '2rem' }}>
				<div className="filter-section">
					<div className="sort-section" >

						<FormControl sx={{ width: '250px' }}>
							<InputLabel sx={{ color: '#fff' }} id="select-label">Status</InputLabel>
							<Select
								sx={{ border: '1px solid #fff', color: '#fff' }}
								labelId="select-label"
								id="status-select"
								value={sortStatus}
								onChange={e => setSortStatus(e.target.value)}
							>
								<MenuItem value="#">All</MenuItem>
								<MenuItem value="alive">Alive</MenuItem>
								<MenuItem value="dead">Death</MenuItem>
								<MenuItem value="unknown">Unknown</MenuItem>
							</Select>
						</FormControl>


						<FormControl sx={{ width: '250px', marginLeft: '10px' }}>
							<InputLabel id="select-label" sx={{ color: '#fff' }}>Gender</InputLabel>
							<Select
								sx={{ border: '1px solid #fff', color: '#fff' }}
								labelId="select-label"
								id="gender-select"
								value={sortGender}
								onChange={e => setSortGender(e.target.value)}
							>
								<MenuItem value="#">All</MenuItem>
								<MenuItem value="male">Male</MenuItem>
								<MenuItem value="female">Female</MenuItem>
								<MenuItem value="genderless">Genderless</MenuItem>
								<MenuItem value="unknown">Unknown</MenuItem>
							</Select>
						</FormControl>

						<Button
							sx={{ marginLeft: '15px', padding: '0 50px', color: '#fff', border: '1px solid #fff' }}
							onClick={getCharacterBySort}>
							Filter
						</Button>
					</div>


					<TextField
						onChange={e => getCharactersByName(e.target.value)}
						id="inptSearch" label="Search character"
						variant="filled"
						sx={{

							'& fieldset': {
								borderColor: '#fff',
								borderWidth: 1,
							},

							'& .MuiInputLabel-root': {
								color: '#fff',
							},

							input: { color: '#fff' },

							marginTop: {xs: '20px', md: 0}

						}}
					/>
				</div>


				{characters?.results === undefined ? (
					<Spinner />
				) : (
					<CharacterList
						characters={characters}
					/>
				)}


				<Grid sx={{ marginTop: '50px', paddingBottom: '50px', display: 'flex', justifyContent: 'center' }}>
					<Stack spacing={2}>
						<ThemeProvider theme={theme}>
							<Pagination count={characters?.info.pages} variant="outlined" size="large" shape="rounded" color="primary" sx={{ color: '#fff' }} onChange={handleChange} />
						</ThemeProvider>
					</Stack>
				</Grid>
			</Container>

			<hr />

			<Container sx={{ padding: '80px 0', display: 'flex', justifyContent: 'center' }}>
				<Link to='/chile' style={{ textDecoration: 'none' }}>
					<Typography
						variant="h2"
						noWrap
						sx={{
							color: 'inherit',
							color: '#fff',
							fontWeight: '500',
							fontSize: {xs: '35px', md: '45px'}
						}}
					>
						Chilean geography
					</Typography>
				</Link>

			</Container>
		</>
	);
}

export default Home;
