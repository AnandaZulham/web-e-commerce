import React from 'react';
import {Grid, Typography}  from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {BlueButton} from './BlueButton';

const useStyle = makeStyles((theme) =>({
		root: {
			margin:'10em auto',
			[theme.breakpoints.down('sm')]: {
				flexDirection:'column'
			}
		},
		image : {
			width:'20rem',
			margin:'3em auto',
			[theme.breakpoints.down('xs')]: {
				width:'18rem'
			}
		},
		margin: {
			marginTop:'25px',
		}
}))

function Header() {
	const classes = useStyle()
	const margintop = classes.margin
    return (
        <Grid container className={classes.root} justify="space-around" alignItems="center">
					<Grid item xs={10} sm={10} md={4} lg={4}>
						<Typography variant="h3">Virtual Reality Shop</Typography>
						<Typography variant="h6"  className={margintop}>Get virtual-reality technology right now with the best and latest quality</Typography>
						<BlueButton variant="outlined" className={margintop} >Get Product</BlueButton>
					</Grid>
					<Grid item sm={7} md={3} lg={3} >
						<img src='./vr.svg' alt="Illustration" className={classes.image} />
					</Grid>
        </Grid>
    )
}
export default Header;
