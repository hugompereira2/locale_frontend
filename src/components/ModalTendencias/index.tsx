import Modal from 'react-modal';
import { stockData } from '../../data'
import { useEffect, useState } from 'react';

interface ModalProps {
    id: number,
    isOpen: boolean;
    onClose: () => void;
}

const customStyles = {
    content: {
        top: '0px',
        left: '0px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

interface listaProp {
    id: number;
    title: string;
    picture: string;
    consumables: {
        title: string;
    }[];
}[]

export function ModalTendencias({ isOpen, onClose, id }: ModalProps) {
    if (!isOpen) return null

    const [lista, setLista] = useState<listaProp[]>()

    useEffect(() => {
        const data = stockData.filter(item => item.id === id)
        setLista(data);
    }, [])

    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
            <button
                type="button"
                onClick={() => onClose()}
                className="react-modal-close"
            >
            </button>
            <h1>teste</h1>

        </Modal>
    )
}