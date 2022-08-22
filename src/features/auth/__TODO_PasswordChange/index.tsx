import {useState} from "react";

import {DTO} from "@/shared/api";
import { ChangePassword } from "./ChangePassword";
import { PasswordRecovery } from "./PasswordRecovery";
import { SuccessedModified } from "./SuccessedModified";

type RecoveryData = {
    phone: string;
    confirmCode: string;
}

export const PasswordChange = () => {
    const [step, setStep] = useState("phone-password");
    const [recoveryData, setRecoveryData] = useState<RecoveryData>({} as RecoveryData);
    console.log("recoveryData", recoveryData);
    
    //const [data, setData] = useState<Nullable<DTO.PhoneAuthData>>();

    if (step === "phone-password") {
        return (
           <PasswordRecovery
                setStep={setStep}
                setRecoveryData={setRecoveryData}
           />
        );
    }

    if (step === "new-password" && recoveryData) {
        return (
           <ChangePassword
                recoveryData={recoveryData}
                setStep={setStep}
           />
        );
    }

    return <SuccessedModified/>;
};