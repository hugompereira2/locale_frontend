import { useState, useEffect } from 'react'
import { Container } from './style'
import { stockData } from '../../data'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineStar } from 'react-icons/ai'
import { RiMessage2Line } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

interface RouterProps {
    idRouter: string
}

export interface listaProp {
    id: number;
    title: string;
    picture: string;
    consumables: {
        logoCompany: string;
        titleCompany: string;
        produtoName: string;
        produtoPicture: string;
        produtoDescription: string;
    }[];
}

export function CardDetails() {
    const { idRouter } = useParams<RouterProps>()
    const [lista, setLista] = useState<listaProp[]>();

    useEffect(() => {
        const data = stockData.filter((item) => item.id === parseFloat(idRouter));
        setLista(data);


    }, []);

    function list() {
        {
        lista?.map((item) => {
            const Consumables =
                item.consumables?.map((item) =>
                    <div>
                        <section>
                            <img src={item.logoCompany} />
                            <label>{item.titleCompany}</label>
                        </section>
                        <img src={item.produtoPicture} />
                        <label>{item.produtoName}</label>
                        <small>{item.produtoDescription}</small>
                        <section>
                            <p><AiOutlineStar size={17} />Favoritar</p>
                            <p><RiMessage2Line size={17} />Entrar em Contato</p>
                        </section>
                    </div>
                );
            return (
                <div>{Consumables}</div>
            );
        })
    }}

return (
                <Container>
                    <div>
                        <img src="https://foodinnovation.com.br/wp-content/uploads/2020/06/vegetais.jpg" />
                        <p> Produtos em Alta</p>
                    </div>
                    <section>
                        <IoIosArrowBack size={18} />
                        <p>Voltar</p>
                    </section>
                    {list}
                </Container>
        )

}