import Modal from "react-modal";
import { stockData } from "../../data";
import { useEffect, useState } from "react";
import { StyledModal, Container } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

interface listaProp {
  id: number;
  title: string;
  picture: string;
  consumables: {
    title: string;
  }[];
}

Modal.setAppElement("#root");

export function ModalTendencias({ isOpen, onClose, id }: ModalProps) {
  const [lista, setLista] = useState<listaProp[]>();
  console.log(id);
  

  useEffect(() => {
      if (isOpen) {
        const data = stockData.filter((item) => item.id === id);
        setLista(data);
      }
  }, [isOpen]);

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <div>
          <h1>Title <AiOutlineCloseCircle size={25} onClick={() => onClose()}
            className="react-modal-close" /></h1>
          <ul>            
          </ul>
        </div>
      </Container>
    </StyledModal>
  );
}
