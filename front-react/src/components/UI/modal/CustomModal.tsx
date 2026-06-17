import type { FC } from 'react';
import classNames from './CustomModal.module.css';

interface CustomModalProps {
    children: any;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const CustomModal: FC<CustomModalProps> = ({children, visible, setVisible}) => {

    const thisClasses = [classNames.customModal];
    if (visible) {
        thisClasses.push(classNames.active);
    }

    const clickHandle = (e) => {
        setVisible(false);
        e.stopPropagation();
    }

    return (
        <div className={thisClasses.join(' ')} onClick={clickHandle}>
            <div className={classNames.customModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;