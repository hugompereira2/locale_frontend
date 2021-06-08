import Modal from "react-modal";
import { useState } from "react";


interface ModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface listaProp {
  id: number;
  title: string;
  picture: string;
  consumables: {
    logoCompany: string;
    titleCompany: string;
    produtoCompany: string;
    produtoPicture: string;
    produtoDescription: string;
  }[];
}

Modal.setAppElement("#root");

export function ModalTendencias({ isOpen, onClose, id }: ModalProps) {
  const [lista, setLista] = useState<listaProp[]>();

  return (<h1></h1>)
}
