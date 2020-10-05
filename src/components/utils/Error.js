import React from 'react';

// MATERIAL UI COMPONENT
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Error = ({ show, txt, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            autoHideDuration={4000}
            open={show}
            onClose={handleClose}
        >
            <Alert variant='filled' severity='error' onClose={handleClose}>
                {txt}
            </Alert>
        </Snackbar>
    );
};

export default Error;
