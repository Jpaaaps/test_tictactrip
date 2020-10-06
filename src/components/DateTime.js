import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
		display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
		width: 350,
		background: '#D5EBEB',
		borderRadius: '4px'
  },
}));

const DateTime = () => {
	const classes = useStyles();
	
	var today = new Date(),
	date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DateTime
