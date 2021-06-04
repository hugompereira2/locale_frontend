import Modal from 'react-modal'
import { useState } from 'react'

interface ModalProps {
    id: number,
    isOpen: boolean;
    onClose: () => void;
}

const customStyles = {
    content : {
      
      top                   : '0px',
      left                  : '0px',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export function ModalTendencias({ isOpen, onClose }: ModalProps) {

    const [title, setTitle] = useState('')
    if (!isOpen) return null

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