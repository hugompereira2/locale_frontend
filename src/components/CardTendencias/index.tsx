import { Link } from 'react-router-dom'

export interface CardTendenciasProps {
  id: number;
  picture: string;
  title: string;
}

export function CardTendencias({ id, picture, title }: CardTendenciasProps) {

  return (
    <div key={id}>
      <Link style={{ textDecoration: 'none' }} to={`/CardDetails/${id}`} >
        <img src={picture} alt={title} />
        <label>{title}</label>
      </Link>
    </div>
  )
}