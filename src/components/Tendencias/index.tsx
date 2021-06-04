import { useEffect, useState } from 'react'
import { Container } from './style'
import { stockData } from '../../data'
import { CardTendencias, CardTendenciasProps } from '../CardTendencias';
import { ModalTendencias } from '../ModalTendencias/index'

export function Tendencias() {
  const [tendencias, setTendencias] = useState<CardTendenciasProps[]>();

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
            return <CardTendencias key={data.id} id={data.id} title={data.title} picture={data.picture} />
          })
        }
      </section>
      <ModalTendencias isOpen={true} />
    </Container>
  );
}