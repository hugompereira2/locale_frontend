import { Container } from './style'

import teste from '../../assets/teste.jpg'

export function Tendencias() {
    return (
        <Container>
            <h1>Tendências</h1>
            <p>Encontre os melhores produtos, que vão colocar sua empresa na frente da concorrência.</p>
            <section>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
                <div>
                    <img src={teste} />
                    <label>teste</label>
                </div>
            </section>

        </Container>
    )
}