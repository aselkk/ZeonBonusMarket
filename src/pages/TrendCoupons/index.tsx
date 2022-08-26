import {useState, useEffect} from "react";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import {Tags} from "@/features/Tags";
import css from "./styles.module.scss";


export const TrendCoupons = () => {
    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);
    const [tags, setTags] = useState<DTO.Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<DTO.Tag>();

    const {
        data,
        isLoading,
        hasNextPage,
        fetchNextPage
    } = couponModel.useTrendCouponsInfQuery(selectedTag?.id);

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
                <h2 className={css.title}>Новые купоны</h2>
                <Tags
                    tags={tags}
                    selectedItem={selectedTag}
                    onSelectedItem={(tag) => setSelectedTag(tag)}
                />
                {
                    (isLoading)
                        ? <h2>Loading</h2> /* TODO: loader */
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