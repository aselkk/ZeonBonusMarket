import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {Utils} from "@/shared/utils";
import {Button} from "@/shared/ui/Button";

import css from "./styles.module.scss";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Success} from "@/assets/icons/successPurchase.svg";


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







export const Alerts = {
    showError
};