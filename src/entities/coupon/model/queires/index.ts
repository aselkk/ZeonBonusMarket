import {useSetRecoilState} from "recoil";
import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    useQueryClient,
    InfiniteData
} from "@tanstack/react-query";
import lstore from "store";

import {Api, DTO} from "@/shared/api";
import {favoritesAtom} from "@/shared/store/favorites";

import {
    CouponSelectors,
    getTransformInfiniteFunction,
    getNextPageCalcFunction
} from "./utils";


const COMMON_PAGE_SIZE = 16;
const SEARCH_PAGE_SIZE = 20;


export const useTrendCouponsQuery = (tagId?: number, page?: number) => {
    const fetchData = async (): Promise<DTO.SearchResult> => {
        return await Api.Coupons.getTrendCoupons(tagId, page);
    };

    return useQuery<DTO.SearchResult, Error, DTO.SearchResult>(
        ["coupons", tagId, page],
        fetchData,
        {
            select: data => {
                return {
                    ...data,
                    results: CouponSelectors.mergeCouponsWithFavorites(data.results)
                };
            }
        }
    );
};


export const useTrendCouponsInfQuery = (tagId?: number) => {
    const fetchData = async ({pageParam = 1}): Promise<DTO.SearchResult> => {
        return await Api.Coupons.getTrendCoupons(tagId, pageParam);
    };

    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(
        ["coupons-infinite", tagId],
        fetchData,
        {
            getNextPageParam: getNextPageCalcFunction(COMMON_PAGE_SIZE),
            select: getTransformInfiniteFunction(CouponSelectors.mergeCouponsWithFavorites)
        }
    );
};


export const useCategoryCouponsInfQuery = (categoryId: number, tagId?: number) => {
    const fetchData = async ({pageParam = 1}): Promise<DTO.SearchResult> => {
        return await Api.Coupons.getCouponsByCategory(categoryId, tagId, pageParam);
    };

    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(
        ["coupons-infinite", categoryId, tagId],
        fetchData,
        {
            getNextPageParam: getNextPageCalcFunction(COMMON_PAGE_SIZE),
            select: getTransformInfiniteFunction(CouponSelectors.mergeCouponsWithFavorites)
        }
    );
};


export const useSearchCouponsInfQuery = (text: string) => {
    const fetchData = async ({pageParam = 1}): Promise<DTO.SearchResult> => {
        return await Api.Coupons.getCouponsByText(text, pageParam);
    };

    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(
        ["coupons-infinite", text],
        fetchData,
        {
            getNextPageParam: getNextPageCalcFunction(SEARCH_PAGE_SIZE),
            select: getTransformInfiniteFunction(CouponSelectors.mergeCouponsWithFavorites)
        }
    );
};


export const useFavoriteCouponsInfQuery = (page?: number) => {
    const fetchData = async ({pageParam = 1}): Promise<DTO.SearchResult> => {
        return await Api.Coupons.getCoupons(pageParam);
    };

    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(
        ["coupons-infinite", page],
        fetchData,
        {
            getNextPageParam: getNextPageCalcFunction(COMMON_PAGE_SIZE),
            select: getTransformInfiniteFunction(CouponSelectors.onlyFavoritesCoupons)
        }
    );
};


export const useToggleFavoriteQuery = () => {
    const queryClient = useQueryClient();
    const setIsExistFavorites = useSetRecoilState(favoritesAtom);

    return useMutation(async ({id, isFavorite}: { id: number; isFavorite: boolean }) => {
            let arr: number[] = lstore.get("favorites") || [];
            if (arr.includes(id))
                arr = arr.filter(x => x !== id);
            else
                arr.push(id);

            lstore.set("favorites", arr);
            setIsExistFavorites(Boolean(arr?.length));
            return {id, isFavorite};
        }, {
            onSuccess: async (coupon, variables, context) => {
                const updater = (data: any) => {
                    return {
                        ...data,
                        results: CouponSelectors.mergerWithFavorite(data.results, variables.id, variables.isFavorite)
                    };
                };

                const mergerWithFavorite =
                    (coupons: DTO.Coupon[]) => CouponSelectors.mergerWithFavorite(coupons, variables.id, variables.isFavorite);
                const updaterInfinite = getTransformInfiniteFunction(mergerWithFavorite);


                queryClient.setQueriesData<InfiniteData<DTO.SearchResult>>(
                    ["coupons-infinite"],
                    data => data && updaterInfinite(data)
                );
                queryClient.setQueriesData(["coupons"], updater);
            }
        }
    );
};