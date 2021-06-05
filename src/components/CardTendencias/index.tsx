export interface CardTendenciasProps {
    id: number;
    picture: string;
    title: string;
    onOpen: () => void;
    cardSelected: () => void;
  }
  
  export function CardTendencias({id, picture, title, onOpen, cardSelected}: CardTendenciasProps) {
    return (
      <div key={id} onClick={ () => onOpen()} >
        <img src={picture} alt={title} />
        <label>{title}</label>
      </div>
    )
  }