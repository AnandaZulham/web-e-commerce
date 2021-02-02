import React, {useState} from 'react';
import {Drawer, IconButton, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {lists} from './Navbar';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
	hideButton : {
		position:'absolute',
		right:'1.3em',
		[theme.breakpoints.up('lg')] : {
			display:'none'
		},
		[theme.breakpoints.up('md')] : {
			display:'none'
		}
	},
	styleList : {
		backgroundColor: '#2196F3',
		color:'white'
	}
}))


export default function Sidebar() {
	const classes = useStyle()
	const [open, setOpen ] = useState(false)
	const toggleDrawer = () => {
		setOpen(true)
	}
	const toggleDrawer1 = () => {
		setOpen(false)
	}
    return (
        <div className={classes.hideButton}>
					<IconButton onClick={toggleDrawer}  disableRipple={true} color="inherit">
						<MenuIcon />
					</IconButton>
					<Drawer anchor="top" onClose={toggleDrawer1} open={open} >
						<List className={classes.styleList}>
							{lists.map((list, index) => (
								<ListItem button key={list.item}>
									<ListItemText primary={list.item}></ListItemText>
								</ListItem>
							))}
						</List>
					</Drawer>
        </div>
    )
}
