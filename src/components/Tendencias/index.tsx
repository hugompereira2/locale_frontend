import { useEffect, useState } from 'react'
import { Container } from './style'
import { stockData } from '../../data'
import { CardTendencias } from '../CardTendencias';
import { ModalTendencias } from '../ModalTendencias/index'

interface TendenciasProps {
  id: number;
  picture: string;
  title: string;
}

export function Tendencias() {
  const [tendencias, setTendencias] = useState<TendenciasProps[]>();

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cardSelected, setCardSelected] = useState(0)

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
            return <CardTendencias key={data.id} id={data.id} title={data.title} picture={data.picture} onOpen={() => setModalIsOpen(true)} cardSelected={ () => setCardSelected(data.id)}/>
          })
        }
      </section>
      <ModalTendencias isOpen={modalIsOpen} onClose={ () => setModalIsOpen(false)} id={cardSelected}/>
    </Container>
  );
}