import {useState} from "react";
import css from "./styles.module.scss";
import {Data} from "./data";
import cn from "classnames";

import {RadioButtons} from "@/shared/ui/RadioButtons";
import {ReactComponent as FaceBookIcon} from "@/assets/icons/fbIcon.svg";
import {ReactComponent as IstagrammIcon} from "@/assets/icons/instagramm.svg";
import {ReactComponent as VKontakte} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as Odnoklassniki} from "@/assets/icons/odnoklassniki.svg";
import {ReactComponent as Mail} from "@/assets/icons/mail.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import {ReactComponent as Map} from "@/assets/icons/map.svg";



export const Creator = () => {

    const titles = [ "Акции", "Контакты" ]
    const [selectedItem, setSelectedItem] = useState(0)
    const onSelectedItemChanged = () => {
        selectedItem === 0 ? setSelectedItem(1) : setSelectedItem(0)
    }


    return (
            <div className={cn("container", css.root)}>
            <div className={css.mainInfo}>
                <div className={css.logo}>
                    <img className={css.logo} src={Data.logoUrl} alt="logo" />
                </div>
                <div className={css.text}>
                    <h3 className={css.creatorName}>{Data.name}</h3>
                    <p className={css.description}>{Data.body}</p>
                </div>
            </div>
            <div className={css.radioWrapper}>
                <RadioButtons titles = {titles} selectedItem = {selectedItem} onSelectedItemChanged={onSelectedItemChanged}/>
            </div>
            {selectedItem === 1 ? (
                            <div className={css.contacts}>
                            <div className={css.contactsText}>
                                <h2>Контакты</h2>
                                <p>{Data.contacts.description}</p>
                            </div>
                            <div className={css.contactsDetails}>
                                <ul className={css.firstCol}>
                                    Наши телефоны: 
                                    {Data.contacts.numbers.map((i: any, index: number) => (
                                        <li key={index}><Phone/>{i}</li>
                                    ))}
                                </ul>
                                <div className={css.dividor}></div>
                                <div className={css.secondCol}>
                                    <div>
                                        <h3>Email:</h3>
                                        <p><Mail/>{Data.contacts.email}</p>
                                    </div>
                                    <div>
                                        <h3>Наш адрес:</h3>
                                        <p><Map/>{Data.contacts.address}</p>
                                    </div>
                                </div>
                                <div className={css.dividor}></div>
                                <ul className={css.thirdCol}>
                                    Мы в социальных сетях:
                                    <li> <FaceBookIcon/> Facebook </li>
                                    <li> <IstagrammIcon/> Instagram </li>
                                    <li> <VKontakte/> VKontakte </li>
                                    <li> <Odnoklassniki/> Odnoklassniki </li>
                                </ul>
                            </div>
                            <div className={css.mapResponsive}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23393.10086601905!2d74.60084515!3d42.8699396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1660306704848!5m2!1sru!2skg" width="1163" height="420" style={{borderRadius:"8px"}} loading="lazy"></iframe>
                            </div>
                        </div>
            ) : 'akcii'}
        </div>
    );
};