import {AppBar, Toolbar, Typography, List, ListItemText, ListItem, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
	root: {
		boxShadow:'none',
		backgroundColor:'#2196F3'
	},
	margin : {
		marginLeft: '25px'
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
			</Toolbar>
		</AppBar>
	)
}


export default Navbar;
