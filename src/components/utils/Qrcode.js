import React from 'react';

import QRCode from 'qrcode.react';

import '../../Resources/Css/qrCode.css';

import { qrCode } from '../../Actions/song';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';

import { useSongStateValue } from '../DataLayer';

const Qrcode = () => {
    const [{ qr }, dispatch] = useSongStateValue();

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction='up' ref={ref} {...props} />;
    });

    const handleClose = () => dispatch(qrCode(false));

    const render_QR = () =>
        qr.value ? (
            <QRCode
                value={qr.value}
                size={300}
                style={{ transform: 'rotate(-90deg)' }}
            />
        ) : null;

    return (
        <Dialog
            open={qr.show}
            onClose={handleClose}
            TransitionComponent={Transition}
            fullWidth={true}
            maxWidth='sm'
            className='qr'
        >
            <DialogContent className='qr__content'>
                <h3>{qr.value}</h3>
                <div className='qr__code'>{render_QR()}</div>
            </DialogContent>
            <DialogActions className='qr__btn_container'>
                <button onClick={handleClose} className='qr__close_btn'>
                    close
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default Qrcode;
