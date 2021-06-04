export interface CardTendenciasProps {
    id: number;
    picture: string;
    title: string;
  }
  
  export function CardTendencias(tendencia: CardTendenciasProps) {
    return (
      <div key={tendencia.id}>
        <img src={tendencia.picture} alt={tendencia.title} />
        <label>{tendencia.title}</label>
      </div>
    )
  }