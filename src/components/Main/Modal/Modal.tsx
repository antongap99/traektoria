import { MouseEvent, useContext } from "react";
import style from "./Modal.module.css";
import { ModalContext } from "../../../context/modal.context";
import { ModalForm } from "./ModalForm/ModalForm";

export const Modal = () => {
  const { toggleEditForm } = useContext(ModalContext);

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    !target.closest(".modalForm") && toggleEditForm && toggleEditForm();
  };

  return (
    <div className={style.modalWrapper} onClick={closeModal}>
      <ModalForm />
    </div>
  );
};
