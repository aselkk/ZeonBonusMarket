import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {Api, DTO} from "@/shared/api";
import lstore from "store";
import _ from "lodash";



// TODO: pass param
const getTrendCoupons = async () => {
    const data = await Api.Coupons.getTrendCoupons(1);
    return data;
};


export const useTrendCouponsCall = () => {

    const onSuccess = () => console.log("on success, useTrendCouponsCall");

    return useQuery<DTO.SearchResult, Error>(["coupons"],
        getTrendCoupons,
        {
            onSuccess,
            select: data => {
                console.log("select useTrendCouponsCall");
                const arr: number[] = lstore.get("favorites");
                if (arr) {
                    return {
                        ...data,
                        results: data.results.map(x => {
                            if (arr.includes(x.id)) {
                                return {
                                    ...x,
                                    is_favorite: true
                                }
                            }

                            return x;
                        })
                    }
                }
                return data;
            }
        });
}




export const useToggleFav = () => {
    const queryClient = useQueryClient();

    return useMutation(async ({id, isFavorite}: { id: number, isFavorite: boolean }) => {
            let arr: number[] = lstore.get("favorites") || [];
            if (arr.includes(id))
                arr = arr.filter(x => x !== id);
            else
                arr.push(id);

            lstore.set("favorites", arr);
            console.log("mutate");
            return {id, isFavorite};
        }, {
            onSuccess: async (data, variables, context) => {
                // await queryClient.invalidateQueries(["coupons"]);
                // console.log("on Succee mudation", data, variables);
                queryClient.setQueryData(["coupons"], (olddata: any) => {
                    return {
                        ...olddata,
                        results: olddata?.results.map((x:any) => {
                            if (x.id === variables.id) {
                                return {
                                    ...x,
                                    is_favorite: variables.isFavorite
                                }
                            }
                            return x;
                        })
                    };
                });
            }
        }
    );
};

