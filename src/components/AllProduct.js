import {Container, Typography, Card, CardMedia, CardContent, Grid, Link} from '@material-ui/core'
import {BlueButton} from '../BlueButton'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
  cardImage : {
	boxSizing: 'border-box',
	marginBottom:'2em',
	height:160,
	width:'100%',
	backgroundPosition: 'center center',
	backgroundSize: 'cover'
  },
  button : {
	margin: '1.5em 0 -1em 0',
	background: '#2196F3', 
	color: 'white',
  },
  price : {
	fontWeight: 'bold',
	margin: '.4em 0',
  }
})

const listproducts = [
  {id: 1, name: 'Virtual Reality Play Glasses', price: 250, link: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
  {id: 2, name: 'Virtual Reality Play Glasses', price: 100, link: 'https://cdn.pixabay.com/photo/2016/05/13/00/35/virtual-reality-1389032_640.jpg'},
  {id: 3, name: 'Virtual Reality Play Glasses', price: 70, link: 'https://i.ibb.co/gZS5BHw/pexels-sound-on-3761123-1.jpg'},
  {id: 4, name: 'Virtual Reality Play Glasses', price: 25, link: 'https://cdn.pixabay.com/photo/2015/08/27/19/27/vr-911031_640.jpg'},
  {id: 5, name: 'Virtual Reality Play Glasses', price: 24, link: 'https://cdn.pixabay.com/photo/2016/04/15/03/29/hololens-1330225_640.jpg'},
  {id: 6, name: 'Virtual Reality Play Glasses', price: 15, link: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}
]

function AllProduct() {
	const classes = styles()
	return (
		<div>
		  <Container style={{marginTop:'7em'}}>
		   <Typography variant="h4">All Product</Typography>
		   <hr/>
		   <Grid container spacing={1}>
		   {listproducts.map((list, index) => (
			 <Grid item xs={6} md={3}>
			 <Card variant='outlined' style={{height:390}}>
			  <CardMedia image={list.link} alt="VR" className={classes.cardImage}/>
			  <CardContent>
				<Typography variant="subtitle1">{list.name}</Typography>
				<Typography variant="subtitle2" className={classes.price}>${list.price}</Typography>
				<Link href="#" variant="body2" color="textSecondary" underline="always">Details</Link>
				<BlueButton variant="contained" size="small" className={classes.button} fullWidth disableElevation>Add to cart</BlueButton>
			  </CardContent>
			 </Card>
			 </Grid>
		   ))}
		   </Grid>
		  </Container>
		</div>
	)
}


export default AllProduct
