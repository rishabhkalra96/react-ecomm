import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

export const UploadBtn = ({format, allowMultiple, materialColor, label, customClass, handleUpload}) => {

    const handleFileUpload = (e) => {
        handleUpload(e.target.files)
    }
    const classes = useStyles();
    return <div className={classes.root}>
    <input
      accept={format}
      className={classes.input}
      id="contained-button"
      multiple={allowMultiple || false}
      type="file"
      onChange={handleFileUpload.bind(this)}
    />
    <label htmlFor="contained-button">
      <Button variant="contained" className={customClass} color={materialColor || 'primary'} component="span">
        {label || 'Upload'}
      </Button>
    </label>
  </div>
}