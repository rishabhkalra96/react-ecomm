import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export const ActionDialog = ({
  openDialog, 
  mainTitle='Delete Item',
  mainBody='No Body Available',
  showAccept=true,
  showReject=true,
  accept={text: 'Accept', onClick: () => {}},
  reject={text: 'Deny', onClick: () => {}}
}) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(openDialog)
    }, [openDialog])
    
      const handleClose = (e, eventType) => {
        e.stopPropagation();
        setOpen(false);
        if (eventType === 'accept') {
          accept.onClick(e)
        }
        if (eventType === 'reject') {
          reject.onClick(e)
        }
      };

      return (
        <div onClick={(e) => {e.stopPropagation()}}>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{mainTitle}</DialogTitle>
            <DialogContent>
              <div id="alert-dialog-description">
              { mainBody }
              </div>
            </DialogContent>
            <DialogActions>
              {showReject ? <Button variant="contained" color="secondary" disableElevation onClick={(e) => handleClose(e, 'reject')} autoFocus>
                {reject.text}
              </Button>: null}
              {showAccept ? <Button variant="contained" onClick={(e) => handleClose(e, 'accept')} color="primary">
                {accept.text}
              </Button>: null}
            </DialogActions>
          </Dialog>
        </div>
      );
}