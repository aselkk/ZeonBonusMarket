import css from "./styles.module.scss";
import {ReactComponent as Vk} from "@/assets/icons/vk-2.svg";
import {ReactComponent as Facebook} from "@/assets/icons/facebook-2.svg";
import {ReactComponent as Od} from "@/assets/icons/od-2.svg";
import {ReactComponent as Telegram} from "@/assets/icons/telegram-2.svg";
import {ReactComponent as Whatsup} from "@/assets/icons/whatsapp-2.svg";


export const SocialMedia = () => {
   
    return (
        <div className={css.root}>
            <span className={css.span}>Поделиться</span>
                <ul className={css.wrap}>
                    <a href="#" target="_blank" >
                        <li className={css.inner}><Vk/></li>
                    </a>
                    <a href="#" target="_blank" >
                        <li className={css.inner}><Facebook/></li>
                    </a>
                    <a href="#" target="_blank" >
                        <li className={css.inner}><Od/></li>
                    </a>
                    <a href="#" target="_blank" >
                        <li className={css.inner}><Telegram/></li>
                    </a>
                    <a href="#" target="_blank" >
                        <li className={css.inner}><Whatsup/></li>
                    </a>
                </ul>
        </div>
    );
};