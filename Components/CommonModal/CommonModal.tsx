import React, { ReactNode } from 'react';
import {ModalContent, ModalWrapper} from "@/Components/CommonModal/CommonModalStyles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <ModalWrapper isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;