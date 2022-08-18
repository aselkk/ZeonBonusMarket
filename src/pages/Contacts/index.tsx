import React from "react";
import cn from "classnames";

import { MenuAboutUs } from "@/features/MenuMini";
import css from "./styles.module.scss";

import {ReactComponent as PhoneIcon} from "@/assets/icons/phone.svg";
import {ReactComponent as MailIcon} from "@/assets/icons/mail.svg";
import {ReactComponent as LocationIcon} from "@/assets/icons/location.svg";
import {ReactComponent as FaceBookIcon} from "@/assets/icons/facebook.svg";
import {ReactComponent as InstagramIcon} from "@/assets/icons/instagram.svg";
import {ReactComponent as VKontakteIcon} from "@/assets/icons/vkontakte.svg";
import {ReactComponent as OdnoklassnikiIcon} from "@/assets/icons/odnoklassniki.svg";
import {SimpleMap} from "@/shared/ui/GoogleMap";

import map from "@/assets/images/mapImage.png"; // TODO: Асель добавит карту
import { useSelector } from "react-redux";

export const Contacts = () => {
  const networkInfo = useSelector((state: any) => state.networkInfo.items);

  return (
    <div className={css.contacts}>
      <div className={cn("container", css.container)}>
        <MenuAboutUs />
        <div className={css.content}>
          <h3 className={css.title}>Контакты</h3>
          <div className={css.text}>
            <p>{networkInfo.description}</p>
          </div>
          <div className={css.box}>
            <div className={css.innerBox}>
              <h4>Наши телефоны:</h4>
              <ul>
                <li>
                  <a rel="stylesheet" href={`tel:${networkInfo.phone1}`}>
                    <div>
                      <PhoneIcon className={css.icons} />
                    </div>
                    <p>{networkInfo.phone1}</p>
                  </a>
                </li>
                <li>
                  <a rel="stylesheet" href={`tel:${networkInfo.phone2}`}>
                    <div>
                      <PhoneIcon className={css.icons} />
                    </div>
                    <p>{networkInfo.phone2}</p>
                  </a>
                </li>
                <li>
                  <a rel="stylesheet" href={`tel:${networkInfo.phone3}`}>
                    <div>
                      <PhoneIcon className={css.icons} />
                    </div>
                    <p>{networkInfo.phone3}</p>
                  </a>
                </li>
              </ul>
              <div className={(css.innerBox, css.inMobile)}>
                <h4>Email:</h4>
                <ul>
                  <li>
                    <a rel="stylesheet" href={`mailto:${networkInfo.email}`}>
                      <div>
                        <MailIcon className={css.icons} />
                      </div>
                      <p>{networkInfo.email}</p>
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
                      <a rel="stylesheet" href={`mailto:${networkInfo.email}`}>
                        <div>
                          <MailIcon className={css.icons} />
                        </div>
                        <p>{networkInfo.email}</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>Наш адрес:</h5>
                  <ul>
                    <li>
                      <div>
                        <LocationIcon className={css.icons} />
                      </div>
                      <p>{networkInfo.address}</p>
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
                  <a
                    rel="stylesheet"
                    href={networkInfo.facebook}
                    target="_blank"
                  >
                    <div>
                      <FaceBookIcon className={css.icons} />
                    </div>
                    <div className={css.mapContainer}>
                        <SimpleMap info = {contacts}/>
                    <p>Facebook</p>
                  </a>
                </li>
                <li>
                  <a
                    rel="stylesheet"
                    href={networkInfo.vkontakte}
                    target="_blank"
                  >
                    <div>
                      <VKontakteIcon className={css.icons} />
                    </div>
                    <p>VKontakte</p>
                  </a>
                </li>
                <li>
                  <a
                    rel="stylesheet"
                    href={networkInfo.instagram}
                    target="_blank"
                  >
                    <div>
                      <InstagramIcon className={css.icons} />
                    </div>
                    <p>Instagram</p>
                  </a>
                </li>
                <li>
                  <a
                    rel="stylesheet"
                    href={networkInfo.odnoklassniki}
                    target="_blank"
                  >
                    <div>
                      <OdnoklassnikiIcon className={css.icons} />
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
                      <LocationIcon className={css.icons} />
                    </div>
                    <p>{networkInfo.address}</p>
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
