import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {Utils} from "@/shared/utils";
import {Button} from "@/shared/ui/Button";

import css from "./styles.module.scss";


const MySwal = withReactContent(Swal);


const showError = async (message: string) => {
    Utils.DOM.disableScrolling();

    await MySwal.fire({
        backdrop: true,
        heightAuto: true,
        icon: "error",
        html: <p className={css.alertText}>{message}</p>,
        buttonsStyling: false,
        confirmButtonText: <Button className={css.alertBtn}>OK</Button>
    });

    Utils.DOM.enableScrolling();
};


const showSuccess = async (message: string) => {
    await MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
};


export const Alerts = {
    showSuccess,
    showError
};