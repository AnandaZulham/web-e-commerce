import React from 'react'
import {Grid, Paper, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {BlueButton} from './BlueButton';

const useStyle = makeStyles({
	media : {
		height:'220px',
		backgroundSize:'contain',
		margin:'2em 0'
	},
	margin: {
		margin:'1em 0'
	}
})

const illustrations = [
	{srcimage:'./AR_Monochromatic.svg', title:'Illustration 1', heading:'Entry-Level Mobile VR', description:'Get Entry-Level Mobile VR product right now with the best and latest quality'},
	{srcimage:'./AR_Monochromatic 1.svg', title:'Illustration 2', heading:'Mobile Virtual Reality', description:'Get Mobile Virtual Reality product right now with the best and latest quality'},
	{srcimage:'./AR_Monochromatic 2.svg', title:'Illustration 3', heading:'High-Level VR', description:'Get Mobile Virtual Reality product right now with the best and latest quality'},

]
export default function ProductCategory() {
	const classes = useStyle()
    return (
			<div>
				<Typography variant="h4" align="center" className={classes.margin}> Choose Product Category</Typography>
        <Grid container justify="space-around">
					{illustrations.map((item,index) => (
						<Grid item lg={3}>
							<Paper elevation={0}>
								<CardMedia image={item.srcimage} alt={item.title} className={classes.media} />
								<CardContent>
									<Typography variant="h5" align="center">{item.heading}</Typography>
									<Typography variant="body1" align="center" style={{margin:'20px 0'}}>{item.description}</Typography>
									<div >
									 <Typography align="center"><BlueButton variant="outlined" className={classes.margin} >See Product</BlueButton></Typography>
									</div>
								</CardContent>
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
    )
}
