import {withStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';

export const BlueButton = withStyles({
	root: {
		boxShadow:'none',
		borderColor:'#2196F3',
		borderRadius:'50px',
		fontWeight:'bold',
		color:'#2196F3',
		'&:hover': {
			backgroundColor:'#2196F3',
			color:'white'
		},
	}
})(Button)
