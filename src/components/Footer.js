import React from 'react'
import {Grid, Typography, List,ListItemText, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
	styleList : {
		margin:'25px 0',
		color:'#2196F3',
		fontSize:'14px'
	},
	styleh4 : {
		marginLeft:'-20px'
	},
	styleFooter : {
		backgroundColor:'#2196F3',
		marginTop:'30px',
		padding:'15px 0'
	}
})

const listReference = [
	{name: 'Illustration', link: 'https://www.manypixels.co/gallery'},
	{name: 'Font', link: 'https://github.com/fontsource/fontsource/blob/master/packages/roboto/README.md'},
	{name: 'Reference', link : 'https://pinterest.com/'},
	{name: 'Icon', link: 'https://material-ui.com/components/material-icons/'}
]

export default function Footer() {
	const classes = useStyle()
    return (
        <div>
          <Grid container justify="space-around">
						<Grid item lg={1} sm={1} xs={9}>
								<Typography variant="h4" className={classes.styleh4}> Logo </Typography>
						</Grid>
						<Grid item lg={3} md={3} sm={3} xs={4}>
							<List>
								<Typography variant="h5"> Resources </Typography>
								{['Blog', 'Privacy & Policy', 'Terms Of Use'].map((item,index) => (
									<Link><ListItemText primary={item} className={classes.styleList} disableTypography={true}></ListItemText></Link>
								))}
							</List>
						</Grid>
						<Grid item lg={3} md={3} sm={3} xs={4}>
							<List>
								<Typography variant="h5"> Asset </Typography>
								{listReference.map((item,index) => (
									<Link key={index} href={item.link} underline="none" target="_blank"> <ListItemText primary={item.name} className={classes.styleList} disableTypography={true}></ListItemText> </Link>
								))}
							</List>
						</Grid>
						<Grid item lg={2} md={2} sm={3} xs={10}>
							<List>
								<Typography variant="h5"> Company </Typography>
								{['About Us', 'Carreer', 'Help', 'Story'].map((item,index) => (
									<ListItemText primary={item} className={classes.styleList} disableTypography={true}></ListItemText>
								))}
							</List>
						</Grid>
					</Grid>
					<div>
						<Typography variant="body1" align="center" className={classes.styleFooter}>Built With <Link color="inherit" underline="always" href="www.material-ui.com">Material-UI</Link></Typography>
					</div>
        </div>
    )
}
