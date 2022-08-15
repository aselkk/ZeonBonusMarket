import {ReactElement} from "react";
import {Link} from "react-router-dom";
import cn from "classnames";

import {ConditionalWrap} from "@/shared/ui/ConditionalWrap";
import css from "./styles.module.scss";


interface Props {
    component?: ReactElement
    linkTo?: string,
    onClick?: () => void,
    disabled?: boolean,
}


export const Button = (props: FCProps<Props>) => {
    return (
        <ConditionalWrap
            condition={!!props.linkTo}
            wrap={child => <Link to={props.linkTo}>{child}</Link>}
        >
            <button
                className={cn(css.button, props.className)}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </ConditionalWrap>
    );
};