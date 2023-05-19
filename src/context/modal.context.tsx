import { createContext, useState } from "react";


interface ProviderProps {
  children: JSX.Element;
}

type CardIdType =  number| null

interface IModalContext {
  showModal:boolean,
  cardId:  CardIdType
  toggleEditForm?: () => void,
  setId?: (id: CardIdType) => void
}

export const ModalContext = createContext<IModalContext>({
  showModal: false,
  cardId: null
});

export const ModalContextProvider = ({
  children,
}: ProviderProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cardId, setCardId] = useState<CardIdType>(null);

  const toggleEditForm = () => {
    setShowModal(!showModal)
  }

  const setId = (id: CardIdType) => {
    setCardId(id)
  }
  return (
    <ModalContext.Provider value={{cardId, setId, showModal, toggleEditForm}}>
      {children}
    </ModalContext.Provider>
  );
};