import React from 'react'
import {Typography, Grid, CardMedia, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
	margin: {
		margin:'4em 0'
	},
	display : {
		marginTop:'3em',

		[theme.breakpoints.down('sm')]: {
			flexDirection:'column-reverse'
		}
	},
	media : {
		height:'300px',
		backgroundSize:'contain',
		[theme.breakpoints.down('sm')]: {
			width:'320px',

		},
		[theme.breakpoints.down('xs')]: {
			width:'280px',
		
		}
	}
}))

export default function Features() {
	const classes = useStyle()
    return (
        <div className={classes.margin}>
            <Typography variant="h4" align="center" >Why Choose Us ?</Typography>
						<Grid container justify="center" alignItems="center" className={classes.display} direction="row-reverse">
							<Grid item lg={4} md={4} sm={8} xs={9}>
								<Typography variant="h4">Online Payment</Typography>
								<Typography variant="body1">You can pay online, without leaving the house and the payment is very easy</Typography>
							</Grid>
							<Grid item lg={4} md={4} sm={8} xs={12}>
								<Paper elevation={0}>
									<CardMedia image="./Online payment _Isometric.svg" className={classes.media}/>
								</Paper>
							</Grid>
						</Grid>

						<Grid container justify="center" alignItems="center" className={classes.display}>
							<Grid item lg={4} md={4} sm={8} xs={9}>
								<Typography variant="h4">Fast</Typography>
								<Typography variant="body1">Very fast delivery process only need to wait 1-3 days the goods to arrive home</Typography>
							</Grid>
							<Grid item lg={4} md={4} sm={8} xs={12}>
								<Paper elevation={0}>
									<CardMedia image="./Fast Working_Monochromatic.svg" className={classes.media}/>
								</Paper>
							</Grid>
						</Grid>
        </div>
    )
}
