import React from "react";
import css from "./styles.module.scss";
import cn from "classnames";

import {MenuAboutUs} from "../../../features/MenuMini";

import map from "@/assets/images/mapImage.png";

import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import {ReactComponent as Mail} from "@/assets/icons/mail.svg";
import {ReactComponent as Location} from "@/assets/icons/location.svg";

import {ReactComponent as FaceBookIcon} from "@/assets/icons/faceBook1.svg";
import {ReactComponent as IstagrammIcon} from "@/assets/icons/instagramm.svg";
import {ReactComponent as VKontakte} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as Odnoklassniki} from "@/assets/icons/odnoklassniki.svg";
import {axiosInstance} from "@/shared/api";


export const Contacts = () => {
    const [contacts, setContacts] = React.useState<any>({});

    // TODO: have to move other file
    const getContactsfromServer = () => {
        return axiosInstance.get("/info/networks/");
    };

    const getContactsfromServerAPI = async () => {
        const response = await getContactsfromServer();
        setContacts(response.data);
    };

    React.useEffect(() => {
        getContactsfromServerAPI();
    }, [setContacts]);

    return (
        <div className={css.aboutUs}>
            <div className={cn("container", css.container)}>
                <MenuAboutUs />
                <div className={css.content}>
                    <h3>Контакты</h3>
                    <div className={css.text}>
                        <p>{contacts.description}</p>
                    </div>
                    <div className={css.box}>
                        <div className={css.innerBox}>
                            <h4>Наши телефоны:</h4>
                            <ul>
                                <li>
                                    <a rel="stylesheet" href={`tel:${contacts.phone1}`}>
                                        <div>
                                            <Phone className={css.icons} />
                                        </div>
                                        <p>{contacts.phone1}</p>

                                    </a>
                                   
                                </li>
                                <li>
                                    <a rel="stylesheet" href={`tel:${contacts.phone2}`}>
                                     
                                        <div>
                                            <Phone className={css.icons} />
                                        </div>
                                        <p>{contacts.phone2}</p>

                                    </a>
                                   
                                </li>
                                <li>
                                    <a rel="stylesheet" href={`tel:${contacts.phone3}`}>
                                        <div>
                                            <Phone className={css.icons} />
                                        </div>
                                        <p>{contacts.phone3}</p>

                                    </a>
                                    
                                </li>
                            </ul>
                            <div className={(css.innerBox, css.inMobile)}>
                                <h4>Email:</h4>
                                <ul>
                                    <li>
                                        <a rel="stylesheet" href={`mailto:${contacts.email}`}>
                                            <div>
                                                <Mail className={css.icons} />
                                            </div>
                                            <p>{contacts.email}</p>

                                        </a>
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={css.line1}></div>

                        <div className={css.noMobile}>
                            <div className={css.innerBox}>
                                <div>
                                    <h5>Email:</h5>
                                    <ul>
                                        <li>
                                            <a rel="stylesheet" href={`mailto:${contacts.email}`}>
                                                <div>
                                                    <Mail className={css.icons} />
                                                </div>
                                                <p>{contacts.email}</p>


                                            </a>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Наш адрес:</h5>
                                    <ul>
                                        <li>
                                            <div>
                                                <Location className={css.icons} />
                                            </div>
                                            <p>{contacts.address}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={css.line}></div>

                        <div className={css.innerBox}>
                            <h4>Мы в социальных сетях:</h4>
                            <ul>
                                <li>
                                    <a rel="stylesheet" href={contacts.facebook} target="_blank">
                                        <div>
                                            <FaceBookIcon className={css.icons} />
                                        </div>
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a rel="stylesheet" href={contacts.vkontakte} target="_blank">
                                        <div>
                                            <VKontakte className={css.icons} />
                                        </div>
                                        <p>VKontakte</p>
                                    </a>
                                </li>
                                <li>
                                    <a rel="stylesheet" href={contacts.instagram} target="_blank">
                                        <div>
                                            <IstagrammIcon className={css.icons} />
                                        </div>
                                        <p>Instagram</p>
                                    </a>
                                </li>
                                <li>
                                    <a rel="stylesheet" href={contacts.odnoklassniki} target="_blank">
                                        <div>
                                            <Odnoklassniki className={css.icons} />
                                        </div>
                                        <p>Odnoklassniki</p>
                                    </a>
                                </li>
                            </ul>
                            <div className={(css.innerBox, css.inMobile)}>
                                <h4>Наш адрес:</h4>
                                <ul>
                                    <li>
                                        <div>
                                            <Location className={css.icons} />
                                        </div>
                                        <p>{contacts.address}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={css.imageBox}>
                        <img className={css.image} src={map} alt="map" />
                    </div>
                </div>
            </div>
        </div>
    );
};
