import React, {useState, useEffect, forwardRef} from "react";
import FlagsSelect from "react-flags-select";
import cn from "classnames";

import css from "./styles.module.scss";


const countryCodes: Readonly<{ [key: string]: string }> = {
    KG: "+996",
    RU: "+7",
    KZ: "+7",
    US: "+775",
    GB: "+50"
};


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    countryCode: string;
    onCountryCodeChanged: (code: string) => void;
    error?: string;
}


export const FormPhoneInputWithFlag = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
    const {error, countryCode, onCountryCodeChanged, ...restProps} = props;
    const isError = Boolean(error);

    const [selectedItem, setSelectedItem] = useState(() => {
        const keys = Object.keys(countryCodes);
        const key = keys.find(key => countryCodes[key] === countryCode);
        return key || keys[0];
    });

    useEffect(() => {
        onCountryCodeChanged(countryCodes[selectedItem]);
    }, [selectedItem]);


    return (
        <div className={css.root}>
            <div className={cn(css.wrap, isError && css.error)}>
                <FlagsSelect
                    className={css.flag}
                    countries={["KG", "RU", "KZ", "US", "GB"]}
                    customLabels={countryCodes}
                    selected={selectedItem}
                    onSelect={setSelectedItem}
                />
                <input
                    className={css.phoneInput}
                    ref={ref}
                    type="number"
                    placeholder={props.placeholder}
                    {...restProps}

                />
            </div>
            <div className={css.errorLabel}>
                {props.error}
            </div>
        </div>
    );
});