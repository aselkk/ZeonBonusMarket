import {InfiniteData} from "@tanstack/react-query";
import produce from "immer";
import lstore from "store";

import {LS_Keys} from "@/shared/contants";
import {DTO} from "@/shared/api";


type CouponsSelectorFunc = (coupons: DTO.Coupon[]) => DTO.Coupon[];


export const getNextPageCalcFunction = (pageSize: number) => {
    return (lastPage: DTO.SearchResult, pages: DTO.SearchResult[]) => {
        const totalPages = Math.ceil(lastPage.count / pageSize);
        if (pages.length < totalPages)
            return pages.length + 1;
        return undefined;
    };
};


export const getTransformInfiniteFunction = (selector: CouponsSelectorFunc) => {
    return (data: InfiniteData<DTO.SearchResult>): InfiniteData<DTO.SearchResult> => {
        return {
            ...data,
            pages: data.pages.map(page => ({
                ...page,
                results: selector(page.results)
            }))
        };
    };
};


export const CouponSelectors = Object.freeze({
    mergeCouponsWithFavorites: (coupons: DTO.Coupon[]): DTO.Coupon[] => {
        const rawFavorites = lstore.get(LS_Keys.Favorites) as number[];
        const favorites = new Set(rawFavorites);
        return coupons.map(x => {
            if (favorites.has(x.id)) {
                return {
                    ...x,
                    is_favorite: true
                };
            }

            return x;
        });
    },

    onlyFavoritesCoupons: (coupons: DTO.Coupon[]): DTO.Coupon[] => {
        const rawFavorites = lstore.get(LS_Keys.Favorites) as number[];
        const favorites = new Set(rawFavorites);

        return coupons.filter(x => favorites.has(x.id))
            .map(x => ({...x, is_favorite: true}));
    },

    mergerWithFavorite: (data: DTO.Coupon[], id: number, isFavorite: boolean): DTO.Coupon[] => {
        return produce(data, draftState => {
            const item = draftState.find(x => x.id === id);
            if (item)
                item.is_favorite = isFavorite;
        });
    }
});