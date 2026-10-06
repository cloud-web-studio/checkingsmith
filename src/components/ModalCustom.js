import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Grow from '@mui/material/Grow';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export default function ModalCustom({open, handleClose, children}) {

  return (
    <React.Fragment>
      <Dialog open={open} slots={{ transition: Transition }} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" role="alertdialog" >
        {children}
      </Dialog>
    </React.Fragment>
  );
}