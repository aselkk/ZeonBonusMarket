import React, { FC } from "react";
import css from "./styles.module.scss";
import cn from "classnames";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/FB.svg";
import { ReactComponent as IstagrammIcon } from "../../../src/assets/icons/INSTA.svg";
import { ReactComponent as VKontakte } from "../../assets/icons/VK.svg";
import { ReactComponent as Odnoklassniki } from "../../assets/icons/OKK.svg";
import { ReactComponent as Mail } from "../../assets/icons/MAIL.svg";
import { ReactComponent as Phone } from "../../assets/icons/TEL.svg";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <div className={css.footer}>
      <div className={cn("container", css.container)}>
        <div className={css.box}>
          <h3>Покупателям</h3>
          <ul>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <p>Как сделать заказ</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <p>Способы оплаты</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <p>Вопросы и ответы</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <p>Политика конфиденциальности</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={css.box}>
          <h3>Компания</h3>
          <ul>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <p>О нас</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                {" "}
              </Link>
              <p>Контакты</p>
            </li>
          </ul>
        </div>
        <div className={css.box}>
          <h3>Мы в соц сетях</h3>
          <ul>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <VKontakte className={css.testIcon} />
                </div>
                <p>Вконтакте</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <FaceBookIcon className={css.testIcon} />
                </div>
                <p>Facebook</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <Odnoklassniki className={css.testIcon} />
                </div>
                <p>Одноклассники</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <IstagrammIcon className={css.testIcon} />
                </div>
                <p>Instagram</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={css.box}>
          <h3>Свяжитесь с нами</h3>
          <ul>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <Mail className={css.testIcon} />
                </div>
                <p>mail@mix.kg</p>
              </Link>
            </li>
            <li>
              <Link className={css.linkTo} to={"#"}>
                <div>
                  <Phone className={css.testIcon} />
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
