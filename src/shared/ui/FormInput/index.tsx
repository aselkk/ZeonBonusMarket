import React, {useState, forwardRef} from "react";
import cn from "classnames";
import css from "./styles.module.scss";

import {ReactComponent as UnvisibleIcon} from "@/assets/icons/unvisible.svg";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    isPassword?: boolean;
}


export const FormInput = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const {error, isPassword, ...restProps} = props;
    const [isShowValue, setIsShowValue] = useState(!isPassword);

    const type = isPassword && !isShowValue
        ? "password"
        : "text";

    const isError = Boolean(error);


    return (
        <div className={css.root}>
            <div className={css.inputWrap}>
                <input
                    className={cn(css.input, isError && css.errorBorder, props.className)}
                    ref={ref}
                    type={type}
                    placeholder={props.placeholder}
                    {...restProps}
                />
                {
                    (isPassword)
                        ? <UnvisibleIcon
                            className={css.passwordIcon}
                            onMouseDown={() => setIsShowValue(true)}
                            onMouseUp={() => setIsShowValue(false)}
                            onMouseLeave={() => setIsShowValue(false)}
                        />
                        : null
                }
            </div>
            <div className={css.errorLabel}>
                {props.error}
            </div>
        </div>
    );
});