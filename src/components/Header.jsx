import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);




	return (
		<AppBar position="static" sx={{ backgroundColor: '#87ceeb' }}>
			<Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<Toolbar disableGutters>

					<Typography
						variant="h4"
						noWrap
						component="a"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							color: 'inherit',
							textDecoration: 'none',

						}}
					>
						Rick and Morty
					</Typography>



				</Toolbar>

				<Typography
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						color: 'inherit',
						textDecoration: 'none',

					}}
					variant="h6">&</Typography>

				<Toolbar>

					<Typography
						variant="h6"
						noWrap
						component="a"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							color: 'inherit',
							textDecoration: 'none',

						}}
					>
						Chilean Geography APP
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;