import React from 'react';

import QRCode from 'qrcode.react';

import '../../Resources/Css/qrCode.css';

import { qrCode } from '../../Actions/song';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { useSongStateValue } from '../DataLayer';

const Qrcode = () => {
    const [{ qr }, dispatch] = useSongStateValue();

    console.log(8888, qr);

    const handleClose = () => dispatch(qrCode(false));

    const render_QR = () =>
        qr.value ? (
            <QRCode
                value={qr.value}
                size={300}
                style={{ transform: 'rotate(-90deg)' }}
            />
        ) : (
            <h2>Sorry, Not Available yet</h2>
        );

    return (
        <Dialog
            open={qr.show}
            onClose={handleClose}
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
