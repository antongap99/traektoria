import { useContext } from "react";
import style from "./Main.module.css";
import { Modal } from "./Modal/Modal";
import { SortingWrapper } from "./SortingWrapper/SortingWrapper";
import { ModalContext } from "../../context/modal.context";
import { Cards } from "./Cards/Cards";
import { MapWrapper } from "./MapWrapper/MapWrapper";

export const Main = () => {
  const {showModal} = useContext(ModalContext)
  return (
      <main className={style.main}>
        <SortingWrapper />
        <Cards/>
        <MapWrapper/>
        {showModal && <Modal/>}
      </main>
  );
};
