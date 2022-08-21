import css from "./styles.module.scss";
import cn from "classnames";
import {useTimer} from "use-timer";
import {useEffect} from "react";


interface Prop {
    setIsTimeOut: (isTimeOut: boolean) => void,
    isTimeOut:boolean
}
export const Timer = ({setIsTimeOut, isTimeOut}: Prop) => {
 
    const {time, start, reset, status} = useTimer({
        initialTime: 60,
        endTime: 0,
        timerType: "DECREMENTAL",
        onTimeOver: () => {
            // TODO: Функция которая должна сработать по завершению времени
            setIsTimeOut(true);
        }
    });

    const timer = (time:number):string => {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        return `${minutes}:${seconds}`; 
    };

    useEffect(() => {
        start();
    }, []);
    
    useEffect(() => {
        if (isTimeOut === false) reset();
        start();
    }, [isTimeOut]);

    return (
        <span>{`${timer(time)}`}</span>
    );
};

