import { AppBar, Toolbar } from '@mui/material';
import { Name } from '../../shared/styles/elements';

const NavBarComponent = () => {
	return (
		<>
			<AppBar position='static' color='transparent' style={{ marginBottom: '100px' }}>
				<Toolbar>
					{/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton> */}
					<Name>Henri Maronen</Name>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
		</>
	);
};
export default NavBarComponent;
