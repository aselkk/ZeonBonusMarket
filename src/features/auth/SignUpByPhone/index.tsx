import {useState} from "react";

import {DTO} from "@/shared/api";
import {InputForm} from "./InputForm";
import {ConfirmationForm} from "./ConfirmationForm";
import {SuccessMessage} from "./SuccessMessage";


export const SignUpByPhone = () => {
    const [step, setStep] = useState("input-data");
    const [data, setData] = useState<Nullable<DTO.PhoneAuthData>>();

    if (step === "input-data") {
        return (
            <InputForm
                onSuccess={data => {
                    setData(data);
                    setStep("confirmation");
                }}
            />
        );
    }

    if (step === "confirmation" && data) {
        return (
            <ConfirmationForm
                phoneAuthData={data}
                onSuccess={() => setStep("success")}
                onReject={() => setStep("input-data")}
            />
        );
    }


    return <SuccessMessage/>;
};