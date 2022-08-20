import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui/Button";
import {ReactComponent as Favorit} from "@/assets/icons/favorite-f.svg";
import css from "./styles.module.scss";
import cn from "classnames";
import {QrCodeModal} from "@/entities/modalTypes/QrCodeModal";


export interface Details {
    companyLogo: string,
    companyName: string,
    companyId: number,
    title: string,
    couponPrice: number,
    discountPercent: number,
    productPrice: number,
    isFavorite: boolean,
    mapLocations: string[]
}

interface Props {
    info?: Details
}

export const CouponDetails = ({info}: Props) => {

    const [isShowQRModal, setIsShowQRModal] = useState(false);
    // const [isShowQRModal, setIsShowQRModal] = useState(false)


    const [btnIsBuy, setBtnIsBuy] = useState(true);
    const [isLiked, setIsLiked] = useState(true);

    const getNewPrice = (price: number = 0, discount: number = 0): number => {
        return Math.round(price / 100 * (100 - discount));
    };

    return (
        <div className={css.root}>
            <Link className={css.logoWrapper} to={`/partner/${info?.companyId}`}>
                <img className={css.logo} src={info?.companyLogo} alt="logo"/>
                <h3 className={css.logoTitle}>{info?.companyName}</h3>
            </Link>
            <p className={css.sale}>Купон на скидку {info?.discountPercent}%</p>
            <p className={css.saleDesc}>{info?.title}</p>
            <div className={css.priceWrap}>
                <span className={css.priceTitle}>Цена за купон:</span>
                <span className={css.priceInner}>
                    <span className={css.priceNew}>{info?.couponPrice} сом</span>
                </span>
            </div>
            <div className={css.priceWrap}>
                <span className={css.priceTitle}>Цена c купоном:</span>
                <span className={css.priceInner}>
                    <span className={css.priceNew}>
                        {getNewPrice(info?.productPrice, info?.discountPercent)} сом
                    </span>
                    <span className={css.priceOld}>{info?.productPrice} сом</span>
                </span>
            </div>
            <div className={css.wrapper}>
                <Button className={cn(css.btn, {[css.btnActive]: !btnIsBuy})}
                    onClick={() => setIsShowQRModal(true)}
                >
                    {btnIsBuy ? "Купить купон" : "Активировать купон"}
                </Button>
                <Button className={cn(css.btnFavorit)}>
                    <Favorit className={isLiked ? cn(css.icon, css.iconIsFavorite) : cn(css.icon)}/>
                </Button>

                {
                    isShowQRModal
                        ? <QrCodeModal onShowAndHideModal={() => setIsShowQRModal(false)}/>
                        : null
                }
            </div>
        </div>
    );
};