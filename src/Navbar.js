import {AppBar, Toolbar, Typography, List, ListItemText, ListItem, Link, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyle = makeStyles({
	root: {
		boxShadow:'none',
		backgroundColor:'#2196F3'
	},
	margin : {
		marginLeft: '25px'
	},
	styleIcon : {
		position:'absolute',
		right:'40px'
	}
})

const lists = [
	{item : 'Home', link:'/'},
	{item : 'Product', link:'/Product'},
	{item : 'Popular', link:'/Popular'},
	{item : 'News', link:'/News'},
	{item : 'About', link:'/About'},
]

function Navbar() {
	const classes = useStyle()
	return(
		<AppBar className={classes.root} position="relative">
			<Toolbar>
				<Typography variant="h4"> Logo </Typography>
					<List>
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
			</Toolbar>
		</AppBar>
	)
}


export default Navbar;
