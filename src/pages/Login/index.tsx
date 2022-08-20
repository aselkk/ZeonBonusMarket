
import { useState } from "react";
import { LoginByPhone } from "./LoginByPhone";
import { LoginByPassword } from "./LoginByPassword";
import { PasswordRecovery as ConfirmationCode} from "./PasswordRecovery";
import { ChangePassword } from "./ChangePassword";
import { SuccessedModified } from "./SuccessedModified";

type RecoveryData = {
    phone: string,
    confirmCode: string
}

export const Login = () => {
    const [activeBlock, setActiveBlock] = useState<number>(0)
    const [phone, setPhone] = useState<string>("")
    const [recoveryData, setRecoveryData] = useState<RecoveryData>({} as RecoveryData)
    
    const renderSwitch = () => {
        switch(activeBlock) {
            case 1:
                return <LoginByPassword 
                            setActiveBlock={setActiveBlock}
                            phone={phone}
                        />;
            case 2:
                return <ConfirmationCode 
                            setActiveBlock={setActiveBlock}
                            setRecoveryData={setRecoveryData}
                        />;
            case 3:
                return <ChangePassword  
                            recoveryData={recoveryData}
                            setActiveBlock={setActiveBlock}
                        />;
            case 4:
                return <SuccessedModified/>;
            default:
                return (
                <LoginByPhone
                    setActiveBlock={setActiveBlock}
                    setPhone={setPhone}
                />
                );
        }
    }

    return (
        <>
        {renderSwitch()}
        </>
    )
}