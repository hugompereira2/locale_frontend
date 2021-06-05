export interface CardTendenciasProps {
  id: number;
  picture: string;
  title: string;
  onOpen: () => void;
}

export function CardTendencias({id, picture, title, onOpen}: CardTendenciasProps) {
  return (
    <div key={id} onClick={() => onOpen()} >
      <img src={picture} alt={title} />
      <label>{title}</label>
    </div>
  )
}