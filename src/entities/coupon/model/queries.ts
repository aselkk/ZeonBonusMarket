import {useRecoilState} from "recoil";
import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import lstore from "store";
import {Api, DTO} from "@/shared/api";
import {favoritesAtom} from "@/shared/store/favorites";


const PAGE_SIZE = 16;

// TODO: pass param
const getTrendCoupons = async (page?: number, tagId?: number): Promise<DTO.SearchResult> => {
    return await Api.Coupons.getTrendCoupons(page, tagId);
};


export const useTrendCouponsCall = (page?: number, tageId?: number) => {
    return useQuery<DTO.SearchResult, Error, DTO.SearchResult>(["coupons", page, tageId],
        () => getTrendCoupons(page, tageId),
        {
            onSuccess: () => console.log("on success, useTrendCouponsCall"),
            select: data => {
                const arr: number[] = lstore.get("favorites");
                if (arr) {
                    return {
                        ...data,
                        results: data.results.map(x => {
                            if (arr.includes(x.id)) {
                                return {
                                    ...x,
                                    is_favorite: true
                                };
                            }

                            return x;
                        })
                    };
                }
                return data;
            }
        });
};

// TODO: pass param

const getTrendCouponsInf = async ({queryKey, pageParam = 1}: any): Promise<DTO.SearchResult> => {
    return await Api.Coupons.getTrendCoupons(pageParam, queryKey[2]);
};


export const useTrendCouponsCallInfinite = (page?: number, tageId?: number) => {

    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(["coupons-infinite", page, tageId],
        getTrendCouponsInf,
        {
            getNextPageParam: (lastPage, pages) => {
                const totalPages = Math.ceil(lastPage.count / PAGE_SIZE);
                if (pages.length < totalPages)
                    return pages.length + 1;
                return undefined;
            },
            onSuccess: () => console.log("on success, useTrendCouponsCall"),
            select: data => {
                const arr: number[] = lstore.get("favorites") || [];
                return {
                    ...data,
                    pages: data.pages.map(page => {
                        return {
                            ...page,
                            results: page.results.map(x => {
                                if (arr.includes(x.id)) {
                                    return {
                                        ...x,
                                        is_favorite: true
                                    };
                                }

                                return x;
                            })
                        };
                    })
                };
            }
        }
    );
};


const getCouponsInf = async ({pageParam = 1}): Promise<DTO.SearchResult> => {
    return await Api.Coupons.getCoupons(pageParam);
};


export const useFavoriteCouponsInfinite = (page?: number) => {
    return useInfiniteQuery<DTO.SearchResult, Error, DTO.SearchResult>(["coupons-favorite-infinite", page],
        getCouponsInf,
        {
            getNextPageParam: (lastPage, pages) => {
                const totalPages = Math.ceil(lastPage.count / PAGE_SIZE);
                if (pages.length < totalPages)
                    return pages.length + 1;
                return undefined;
            },
            select: data => {
                const arr: number[] = lstore.get("favorites") || [];
                const set = new Set(arr);
                return {
                    ...data,
                    pages: data.pages.map(page => {
                        return {
                            ...page,
                            results: page.results
                                .filter(x => set.has(x.id))
                                .map(x => ({...x, is_favorite: true}))
                        };
                    })
                };
            }
        }
    );
};


export const useSearchCouponsCall = (page?: number, tageId?: number) => {
    return useQuery<DTO.SearchResult, Error, DTO.SearchResult>(["coupons", page, tageId],
        () => getTrendCoupons(page, tageId),
        {
            onSuccess: () => console.log("on success, useTrendCouponsCall"),
            select: data => {
                const arr: number[] = lstore.get("favorites");
                if (arr) {
                    return {
                        ...data,
                        results: data.results.map(x => {
                            if (arr.includes(x.id)) {
                                return {
                                    ...x,
                                    is_favorite: true
                                };
                            }

                            return x;
                        })
                    };
                }
                return data;
            }
        });
};


export const useToggleFav = () => {
    const queryClient = useQueryClient();
    const [isExistFavorites, setIsExistFavorites] = useRecoilState(favoritesAtom);

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
        onSuccess: async (data, variables, context) => {
            queryClient.setQueriesData(["coupons"], (data: any) => {
                return {
                    ...data,
                    results: data?.results.map((x: any) => {
                        if (x.id === variables.id) {
                            return {
                                ...x,
                                is_favorite: variables.isFavorite
                            };
                        }
                        return x;
                    })
                };
            });

            queryClient.setQueriesData(["coupons-favorite-infinite"], (data: any) => {
                return {
                    ...data,
                    pages: data.pages.map((page: DTO.SearchResult) => {
                        return {
                            ...page,
                            results: page.results.map((x) => {
                                if (x.id === variables.id) {
                                    return {
                                        ...x,
                                        is_favorite: variables.isFavorite
                                    };
                                }

                                return x;
                            })
                        };
                    })
                };
            });

            queryClient.setQueriesData(["coupons-infinite"], (data: any) => {
                return {
                    ...data,
                    pages: data.pages.map((page: DTO.SearchResult) => {
                        return {
                            ...page,
                            results: page.results.map((x) => {
                                if (x.id === variables.id) {
                                    return {
                                        ...x,
                                        is_favorite: variables.isFavorite
                                    };
                                }

                                return x;
                            })
                        };
                    })
                };
            });
        }
    }
    );
};

