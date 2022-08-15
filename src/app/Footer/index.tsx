import {Link} from "react-router-dom";
import cn from "classnames";

import css from "./styles.module.scss";

import {ReactComponent as FaceBookIcon} from "@/assets/icons/facebook.svg";
import {ReactComponent as IstagrammIcon} from "@/assets/icons/instagramm.svg";
import {ReactComponent as VKontakte} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as Odnoklassniki} from "@/assets/icons/odnoklassniki.svg";
import {ReactComponent as Mail} from "@/assets/icons/mail.svg";
import {ReactComponent as Phone} from "@/assets/icons/phone.svg";


export const Footer = () => {
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
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <VKontakte className={css.icons} />
                                </div>
                                <p>Вконтакте</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <FaceBookIcon className={css.icons} />
                                </div>
                                <p>Facebook</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <Odnoklassniki className={css.icons} />
                                </div>
                                <p>Одноклассники</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <IstagrammIcon className={css.icons} />
                                </div>
                                <p>Instagram</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.box}>
                    <div className={css.title}>
                        <h3>Свяжитесь с нами</h3>
                    </div>
                    <ul>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <Mail className={css.icons} />
                                </div>
                                <p>mail@mix.kg</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={css.linkTo} to={"#"}>
                                {/* TODO: ссылки на страницы */}
                                <div>
                                    <Phone className={css.icons} />
                                </div>
                                <p>+996 555 55 55 55</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
