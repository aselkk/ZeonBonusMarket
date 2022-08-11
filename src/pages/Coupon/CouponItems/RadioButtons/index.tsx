import React, { FC } from "react";
import css from "./styles.module.scss"
import cn from "classnames";

export const RadioButtons: FC = () => {

    const [activeRadio, setActiveRadio] = React.useState("radio1")
    
    const isRadioSelected = (value: string): boolean => activeRadio === value
    
    const handlerRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setActiveRadio(e.target.value)
    

    return (
        <div className={css.root}>
            <div className={css.inner}>
                <label className={css.label} >
                    Условия
                    <input 
                        className={css.radio} 
                        type="radio" 
                        name="radio-btn"
                        value="radio1" 
                        // checked={isRadioSelected('radio1')}
                        // onChange={handlerRadioClick}
                    /> 
                </label>
            </div>
            <div className={css.inner}>
                <input 
                    className={css.radio} 
                    type="radio" 
                    name="radio-btn"
                    value="radio2" 
                    // checked={isRadioSelected('radio2')}
                    // onChange={handlerRadioClick}
                />  
                <label className={css.label} htmlFor="radio2">Описание</label>
            </div>
            <div className={css.inner}>
                <input 
                    className={css.radio} 
                    type="radio" 
                    name="radio-btn"
                    value="radio3" 
                    // checked={isRadioSelected('radio3')}
                    // onChange={handlerRadioClick}
                />
                <label className={css.label}  htmlFor="radio3">Адреса</label>
            </div>
            <button
                onClick={() => setActiveRadio("some")}
                className={cn(css.radioBtn, {
                    [css.radioBtnActive]: activeRadio === "some"
                })}
            >
                Some
            </button>
        </div>
    );
};
