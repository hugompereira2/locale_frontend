// import { createContext, useState, useContext } from 'react'

// interface openModalProps {
//     visible: boolean
// }

// const ModalContext = createContext({});

// const ModalProvider: React.FC<{}> = ({ children }) => {
//     const [modalState, setState] = useState({ visible: false })

//     const openModal = (payload: openModalProps) => setState({ ...payload, visible: true });
//     const closeModal = () => setState({ visible: true });

//     return <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
//         {children}
//     </ModalContext.Provider>
// }

// const useModalContext = () => {
//     const context = useContext(ModalContext);
//     return context;
// }

// export { useModalContext, ModalProvider }

import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface ModalData {
    id: number,
    title: string,
    consumable: []
}

interface ModalProps {
    children: ReactNode;
}

interface ModalContextData{
    data: ModalData[];
    openModal: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);


export function TransactionsProvider({children}: ModalProps){

    const [transactions, setTransactions] = useState<ModalContextData[]>([])
    return (
        <h1></h1>
    )

}

export function Modal (){
    const context = useContext(ModalContext);

    return context;
}