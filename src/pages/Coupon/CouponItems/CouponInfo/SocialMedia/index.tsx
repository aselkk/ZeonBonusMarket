import { FC } from "react";
import css from "./styles.module.scss"
import { ReactComponent as Vk } from "@/assets/icons/vk.svg";
import { ReactComponent as Facebook } from "@/assets/icons/facebook.svg";
import { ReactComponent as Od} from "@/assets/icons/od.svg";
import { ReactComponent as Telegram} from "@/assets/icons/telegram.svg";
import { ReactComponent as Whatsup} from "@/assets/icons/whatsup.svg";


export const SocialMedia: FC = () => {
   
    return (
        <div className={css.root}>
            <span className={css.span}>Поделиться</span>
            <div className={css.wrap}>
                <a href="#" target="_blank" ><Vk/></a>
                <a href="#" target="_blank" ><Facebook/></a>
                <a href="#" target="_blank" ><Od/></a>
                <a href="#" target="_blank" ><Telegram/></a>
                <a href="#" target="_blank" ><Whatsup/></a>
            </div>
        </div>
    );
};