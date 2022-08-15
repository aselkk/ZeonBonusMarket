import {ReactComponent as Favorit} from "@/assets/icons/favorite.svg";
import css from "./styles.module.scss";


export const Favorite = () => {
    return (
        <div className={css.root}>
            <div className={css.inner}>
                <Favorit/>
            </div>
        </div>
    );
};