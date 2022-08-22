import React from "react";
import css from "./styles.module.scss";
import {ReactComponent as SuccessPurchaseIcon} from "@/assets/icons/successPurchase.svg";
import {CustomModal} from "../../shared/ui/CustomModal";


export const SuccessModal = (props: any) => {
    return (
        <CustomModal onShowAndHideModal={props.onShowAndHideModal}>
            <div className={css.content}>
                <SuccessPurchaseIcon />
                <p>Спасибо за покупку! </p>
            </div>
        </CustomModal>
    );
};
