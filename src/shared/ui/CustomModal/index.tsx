import { Fragment, useState } from "react";
import ReactDom, { createPortal } from "react-dom";
import css from "./styles.module.scss";
import { ReactComponent as ModalCloseIcon } from "@/assets/icons/closeIcon.svg";

const Backdrop = (props: any) => {
  return (
    <div className={css.modal__backdrop} onClick={props.onShowAndHideModal} />
  );
};

const ModalOverlay = (props: any) => {
  return (
    <div className={css.modal__modal}>
      <div className={css.container}>
        <div className={css.closeModal}>
          <ModalCloseIcon onClick={props.onShowAndHideModal} />
        </div>
        {props.children}
      </div>
    </div>
  );
};

const portalElement: any = document.getElementById("overlays");

export const CustomModal = (props: any) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onShowAndHideModal={props.onShowAndHideModal} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay onShowAndHideModal={props.onShowAndHideModal}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
