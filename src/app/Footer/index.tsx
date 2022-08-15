import React from "react";
import {Link} from "react-router-dom";
import cn from "classnames";

import css from "./styles.module.scss";

import {ReactComponent as FaceBookIcon} from "@/assets/icons/faceBook1.svg";
import {ReactComponent as IstagrammIcon} from "@/assets/icons/instagramm.svg";
import {ReactComponent as VKontakte} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as Odnoklassniki} from "@/assets/icons/odnoklassniki.svg";
import {ReactComponent as Mail} from "@/assets/icons/mail.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";
import {axiosInstance} from "@/shared/api";


export const Footer = () => {
    const [contacts, setContacts] = React.useState(Object);

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
        <div className={css.footer}>
            <div className={cn("container", css.container)}>
                <div className={css.box}>
                    <div className={css.title}>
                        <h3>Покупателям</h3>
                    </div>
                    <ul>
                        <li>
                            <Link className={css.linkTo} to={"/errorPage"}>
                                {/* TODO: ссылки на страницы */}
                                <p>Как сделать заказ</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <p>Способы оплаты</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"/helpPage"}>
                                {/* TODO: ссылки на страницы */}
                                <p>Вопросы и ответы</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"/privacyPolicy"}>
                                {/* TODO: ссылки на страницы */}
                                <p>Политика конфиденциальности</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.box}>
                    <div className={css.title}>
                        <h3>Компания</h3>
                    </div>
                    <ul>
                        <li>
                            <Link className={css.linkTo} to={"/aboutUs"}>
                                {/* TODO: ссылки на страницы */}
                                <p>О нас</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"/contacts"}>
                                {/* TODO: ссылки на страницы */}
                                <p>Контакты</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.box}>
                    <div className={css.title}>
                        <h3>Мы в соц сетях</h3>
                    </div>
                    <ul>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={contacts.vkontakte} target="_blank">
                                <div>
                                    <VKontakte className={css.icons} />
                                </div>
                                <p>Вконтакте</p>
                            </a>
                        </li>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={contacts.facebook} target="_blank">
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <FaceBookIcon className={css.icons} />
                                </div>
                                <p>Facebook</p>
                            </a>
                        </li>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={contacts.odnoklassniki} target="_blank">
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <Odnoklassniki className={css.icons} />
                                </div>
                                <p>Одноклассники</p>
                            </a>
                        </li>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={contacts.instagram} target="_blank">
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <IstagrammIcon className={css.icons} />
                                </div>
                                <p>Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css.box}>
                    <div className={css.title}>
                        <h3>Свяжитесь с нами</h3>
                    </div>
                    <ul>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={`mailto:${contacts.email}`}>
                                <div>
                                    <Mail className={css.icons} />
                                </div>
                                <p>{contacts.email}</p>
                            </a>
                        </li>
                        <li>
                            <a className={css.linkTo} rel="stylesheet" href={`tel:${contacts.phone1}`}>
                                <div>
                                    <Phone className={css.icons} />
                                </div>
                                <p>{contacts.phone1}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
