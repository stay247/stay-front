import React, {useEffect} from 'react';
import {Snackbar, Alert} from '@mui/material';
import {useSnackbarStore} from '../../stores/snackbarStore';

const SnackbarComponent: React.FC = () => {
    const {isOpen, message, severity, closeSnackbar} = useSnackbarStore();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpen) {
            timer = setTimeout(closeSnackbar, 3000);
        }
        return () => clearTimeout(timer);
    }, [isOpen, closeSnackbar]);

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            onClose={closeSnackbar}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        >
            <Alert
                onClose={closeSnackbar}
                severity={severity}
                sx={{
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    color: 'white',
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComponent;
