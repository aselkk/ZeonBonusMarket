import css from "./styles.module.scss";
import cn  from "classnames";
import {useState} from "react";
import {FirstStep} from "./FirstStep";
import {SecondStep} from "./SecondStep";
import {ThirdStep} from "./ThirdStep";
import {Data} from "./FirstStep";



export const Signup = () => {
    const [activeBlock, setActiveBlock] = useState<number>(0);
    const [data, setData] = useState<Data>({} as Data);
    const [succeed, setSucceed] = useState(false);
    
    const renderSwitch = () => {
        switch (activeBlock) {
            case 1:
                return <SecondStep 
                    userData={data}
                    setActiveBlock={setActiveBlock}
                />;
                break;
            case 2:
                return <ThirdStep />;
                break;
            default:
                return (
                    <FirstStep 
                        setSubmitResult={setData}
                        setActiveBlock={setActiveBlock}
                    />
                );
        }
    };

    return (
        <>
            {renderSwitch()}
        </>
    );
             
};


// const First = ({onSuccess}) => {

//     onSuccess(data);
//     return (

//     )
// }