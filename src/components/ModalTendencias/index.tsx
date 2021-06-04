import Modal from 'react-modal'
import { useState } from 'react'

interface ModalProps {
    isOpen: boolean;
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export function ModalTendencias({ isOpen }: ModalProps) {

    const [title, setTitle] = useState('')

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

        <button
            type="button"
            className="react-modal-close"
        >
        </button>
        <h1>teste</h1>

        </Modal>
    )
}