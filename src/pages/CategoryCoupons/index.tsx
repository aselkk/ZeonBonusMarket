import {useState, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
import {Categories} from "@/features/Categories";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import {Tags} from "./Tags";
import css from "./styles.module.scss";


export const CategoryCoupons = () => {
    const location: any = useLocation();
    const params = useParams<{id:string}>();
    const [page, setPage] = useState(1);
    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);
    const [tags, setTags] = useState<DTO.Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<DTO.Tag>();

    const {
        data,
        isLoading,
        hasNextPage,
        refetch,
        fetchNextPage
    } = couponModel.useCategoryCouponsCallInfinite(Number(params.id), selectedTag?.id);


    useEffect(() => {
        void refetch();
    }, [[params, selectedTag]]);

    useEffect(() => {
        if (data) {
            const result = data?.pages
                .map(x => x.results.map(n => couponModel.convertToCouponInfo(n)))
                .flat();
            setCoupons(result);
        }
    }, [data]);




    const fetchTags = async () => {
        try {
            const response = await axiosInstance.get("tags");
            const result: DTO.Tag[] = response.data;
            setTags(result);
            setSelectedTag(result[0]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchTags();
    }, []);



    const onLoadMoreClick = () => {
        void fetchNextPage();
    };


    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <Categories/>
                <h2 className={css.title}>
                    Категория: {location.state.name}
                </h2>
                <Tags
                    tags={tags}
                    selectedItem={selectedTag}
                    onSelectedItem={(tag) => setSelectedTag(tag)}
                />
                {
                    (isLoading)
                        ? <h2>Loading</h2> /* TODO: loader*/
                        : null
                }
                <CardsContainer
                    cards={coupons}
                    render={(x, i) => <CouponCard key={x.id} info={x}/>}
                />
                <Button className={css.button} onClick={onLoadMoreClick} disabled={!hasNextPage}>
                    Загрузить еще
                </Button>
            </div>
        </main>
    );
};