import React from "react";
import css from "./styles.module.scss";
import {ReactComponent as ErrorPurchaseIcon} from "@/assets/icons/errorPurchase.svg";
import {CustomModal} from "@/shared/ui/CustomModal";


export const ErrorModal = (props: any) => {
    return (
        <CustomModal onShowAndHideModal={props.onShowAndHideModal}>
            <div className={css.content}>
                <ErrorPurchaseIcon />
                <p>Ошибка. Повторите еще раз.</p>
            </div>
        </CustomModal>
    );
};
