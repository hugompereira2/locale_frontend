import { useEffect, useState } from 'react'
import { Container } from './style'
import { stockData } from '../../data'
import { CardTendencias } from '../CardTendencias';

interface TendenciasProps {
  id: number;
  picture: string;
  title: string;
}

export function Tendencias() {
  const [tendencias, setTendencias] = useState<TendenciasProps[]>();

  useEffect(() => {
    const data = stockData.map(item => item);

    setTendencias(data);
  }, []);

  return (
    <Container>
      <h1>Tendências</h1>
      <p>Encontre os melhores produtos, que vão colocar sua empresa na frente da concorrência.</p>
      <section>
        {
          tendencias?.map(data => {
            return (
              <CardTendencias 
                key={data.id} 
                id={data.id} 
                title={data.title} 
                picture={data.picture} 
              />
            )
          })
        }
      </section>
    </Container>
  );
}