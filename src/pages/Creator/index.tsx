import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {RadioButtons} from "@/shared/ui/RadioButtons";
import {CouponCard, CouponInfo} from "@/entities/CouponCard";
import css from "./styles.module.scss";

import {ReactComponent as FBIcon} from "@/assets/icons/fbIcon.svg";
import {ReactComponent as IGIcon} from "@/assets/icons/instagramm.svg";
import {ReactComponent as VKIcon} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as OKIcon} from "@/assets/icons/odnoklassniki.svg";
import {ReactComponent as Mail} from "@/assets/icons/mail.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import {ReactComponent as Map} from "@/assets/icons/map.svg";


export const Creator = () => {

    const titles = ["Акции", "Контакты"];
    const [info, setInfo] = useState<DTO.Partner>();
    const [selectedItem, setSelectedItem] = useState(0);
    const [coupons, setCoupons] = useState<CouponInfo[]>([]);
    const {partnerId} = useParams();

    const onSelectedItemChanged = () => {
        selectedItem === 0 ? setSelectedItem(1) : setSelectedItem(0);
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(`/company/${partnerId}`);
                const result: DTO.Partner = response.data;
                const couponRes: any = result.coupons;
                const couponItems = couponRes.map((x: DTO.Coupon): CouponInfo => ({
                    id: x.id,
                    title: x.title,
                    previewImage: x.preview_image,
                    companyName: x.company_name,
                    companyLogo: x.company_logo,
                    isFavorite: x.is_favorite,
                    couponPrice: Number(x.price_for_coupon),
                    productPrice: Number(x.old_price),
                    discount: x.discount_percent
                }));
                setCoupons(couponItems);
                setInfo(result);
            } catch (err) {
                console.error(err);
            }
        }
        )();
    }, []);


    return (
        <div className={cn("container", css.root)}>
            <div className={css.mainInfo}>
                <div className={css.logo}>
                    <img className={css.logo} src={info?.logo} alt="logo" />
                </div>
                <div className={css.text}>
                    <h3 className={css.creatorName}>{info?.company_name}</h3>
                    <p className={css.description}>{info?.description}</p>
                </div>
            </div>
            <div className={css.radioWrapper}>
                <RadioButtons 
                    titles = {titles} 
                    selectedItem = {selectedItem}
                    onSelectedItemChanged={onSelectedItemChanged}
                />
            </div>
            {selectedItem === 1 ? (
                <div className={css.contacts}>
                    <div className={css.contactsText}>
                        <h2>Контакты</h2>
                    </div>
                    <div className={css.contactsDetails}>
                        <ul className={css.firstCol}>
                            Наши телефоны: 
                            <li> <Phone/> <a href={`tel:${info?.phone1}`}> {info?.phone1} </a>  </li>
                            <li> <Phone/> <a href={`tel:${info?.phone2}`}> {info?.phone2} </a> </li>
                            <li> <Phone/> <a href={`tel:${info?.phone3}`}> {info?.phone3} </a> </li>
                        </ul>
                        <div className={css.dividor}></div>
                        <div className={css.secondCol}>
                            <div>
                                <h3>Email:</h3>
                                <p><Mail/><a href={`mailto: ${info?.email}`}> {info?.email} </a></p>
                            </div>
                            <div>
                                <h3>Наш адрес:</h3>
                                <p><Map/>{info?.address}</p>
                            </div>
                        </div>
                        <div className={css.dividor}></div>
                        <ul className={css.thirdCol}>
                            Мы в социальных сетях:
                            <li> <FBIcon/> <a target="_blank" href={info?.network.facebook}> Facebook </a></li>
                            <li> <IGIcon/> <a target="_blank" href={info?.network.instagram}> Instagram </a></li>
                            <li> <VKIcon/> <a target="_blank" href={info?.network.vkontakte}> VKontakte </a></li>
                            <li> <OKIcon/> <a target="_blank" href={info?.network.odnoklassniki}> Odnoklassniki </a></li>
                        </ul>
                    </div>
                    <div className={css.mapResponsive}>
                        <iframe 
                            src={`https://maps.google.com/maps?q=${info?.coordinates[0].geolocation}&hl=en-US&z=14&ie=UTF8&iwloc=B&output=embed`}
                            width="1163" 
                            height="420" 
                            style={{borderRadius: "8px"}} 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            ) : 
                <div className={css.cardsWrapper}>
                    <h2>Акции</h2>
                    <div className={css.cards}>
                        {
                            coupons.map(x => <CouponCard key={x.id} info={x}/>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};