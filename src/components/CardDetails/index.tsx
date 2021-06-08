import { useState, useEffect } from 'react'
import { Container } from './style'
import { stockData } from '../../data'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineStar } from 'react-icons/ai'
import { RiMessage2Line } from 'react-icons/ri'
import { useParams, Link } from 'react-router-dom'

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

    return (
        <Container>
            {
                lista?.map((item, index) => {
                    return (
                        <div>
                            <img src={item.picture} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    );
                })
            }
            <section>
                <IoIosArrowBack size={18} />
                <Link style={{ textDecoration: 'none' }} to="/"><p>Voltar</p></Link>
            </section>
            {
                lista?.map((item, index) => {
                    const Consumables =
                        item.consumables?.map((item) =>
                            <div >
                                <section key={index}>
                                    <img src={item.logoCompany} alt={item.titleCompany} />
                                    <label>{item.titleCompany}</label>
                                </section>
                                <img src={item.produtoPicture} alt={item.produtoName} />
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
            }
        </Container>
    )

}