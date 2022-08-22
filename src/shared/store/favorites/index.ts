import {atom} from "recoil";
import lstore from "store";


export const favoritesAtom = atom<boolean>({
    key: "favorites-indicator",
    default: false,
    effects: [
        ({setSelf}) => {
            const arr = lstore.get("favorites") as number[];
            setSelf(Boolean(arr?.length));
        }
    ]
});
