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
          {lista?.map((item) => {
            return (
              <h1 key={item.id}>
                {item.title}
                <AiOutlineCloseCircle
                  size={18}
                  onClick={() => onClose()}
                  className="react-modal-close"
                />
              </h1>
            );
          })}
          <ul>
            {lista?.map((item) => {
              return (
                <>
                  {item.consumables.map((consumable, index) => {
                    return (
                      <>
                        <li key={index}>{consumable.title}</li>
                      </>
                    );
                  })}
                </>
              );
            })}
          </ul>
        </div>
      </Container>
    </StyledModal>
  );
}
