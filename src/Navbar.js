import {AppBar, Toolbar, Typography, List, ListItemText, ListItem, Link, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Sidebar from './Sidebar';

const useStyle = makeStyles((theme) => ({
	root: {
		boxShadow:'none',
		backgroundColor:'#2196F3',
	},
	margin : {
		marginLeft: '25px'
	},
	styleIcon : {
		position:'absolute',
		right:'4em'
	},
	hideList : {
		[theme.breakpoints.down('sm')] : {
			display:'none'
		}
	}
}))

export const lists = [
	{item : 'Home', link:'/'},
	{item : 'Product', link:'/Product'},
	{item : 'Popular', link:'/Popular'},
	{item : 'News', link:'/News'},
	{item : 'About', link:'/About'},
]

function Navbar() {
	const classes = useStyle()
	return(
		<AppBar className={classes.root} >
			<Toolbar>
				<Typography variant="h4"> Logo </Typography>
					<List className={classes.hideList}>
						<ListItem>
							{lists.map((list,index) => {
								return (
								<Link href={list.link} color="inherit" key={index} underline="none" className={classes.margin}><ListItemText primary={list.item} ></ListItemText></Link>
								)
							})}
						</ListItem>
					</List>
					<div className={classes.styleIcon}>
						<IconButton color="inherit">
							<ShoppingCartIcon />
						</IconButton>
						<IconButton color="inherit">
							<NotificationsIcon />
						</IconButton>
						<IconButton color="inherit">
							<AccountCircleIcon />
						</IconButton>
					</div>
					<Sidebar />
			</Toolbar>
		</AppBar>
	)
}


export default Navbar;
