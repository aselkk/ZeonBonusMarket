import React from "react";
import css from "./styles.module.scss";
import {ReactComponent as ExampleQR} from "@/assets/icons/exmpleQr.svg";
import {ReactComponent as QuantityCouponIcon} from "@/assets/icons/quantityCoupons.svg";
import {ReactComponent as ClockIcon} from "@/assets/icons/clock1.svg";
import {CustomModal} from "@/shared/ui/CustomModal";


export const QrCodeModal = (props: any) => {
    return (
        <CustomModal onShowAndHideModal={props.onShowAndHideModal}>
            <div className={css.detailContent}>
                <div className={css.iconContainer}>
                    <ExampleQR />
                </div>
                <div className={css.describtionContainer}>
                    <p className={css.title}>
            Блюда в четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в
            четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в четырех
            ресторанах «Чайхона № 1» со скидкой 50%
                    </p>
                    <div className={css.discountBox}>
                        <div className={css.discount}> 50%</div>
                        <div className={css.period}>
                            <h5>Период действия акции:</h5>
                            <p>
                с <span>29.03.2021 </span> по <span> 30.03.2021</span>
                            </p>
                        </div>
                    </div>
                    <div className={css.footer}>
                        <div>
                            <QuantityCouponIcon />
                        </div>
                        <p>{`${714} купонов купили`}</p>
                    </div>
                    <div className={css.footer}>
                        <div>
                            <ClockIcon />
                        </div>
                        <p>Время продаж ограничено!</p>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
};
