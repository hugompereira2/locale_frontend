import { useState } from 'react'
import { Container } from './style'
import { stockData } from '../../data'

import teste from '../../assets/teste.jpg'

export function Tendencias() {

    const ListaTendencias = stockData.map((item) =>
        <div key={item.id}>
            <img src={item.picture} alt={item.title}/>
            <label>{item.title}</label>
        </div>
    );

    return (
        <Container>
            <h1>Tendências</h1>
            <p>Encontre os melhores produtos, que vão colocar sua empresa na frente da concorrência.</p>
            <section>
                {ListaTendencias}
            </section>
        </Container>
    );
}