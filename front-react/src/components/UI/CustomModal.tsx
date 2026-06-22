import type { FC } from 'react';
import { Box, Modal } from '@mui/material';

interface CustomModalProps {
    children: any;
    open: boolean;
    onClose: () => void;
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
};

const CustomModal: FC<CustomModalProps> = ({children, open, onClose}) => {

    const closeHandle = (e) => {
        onClose();
        e.stopPropagation();
    }

    return (
        <Modal open={open} onClose={closeHandle}>
            <Box sx={modalStyle}>
                {children}
            </Box>
        </Modal>
    );
};

export default CustomModal;