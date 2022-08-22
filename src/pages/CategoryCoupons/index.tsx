import {useState, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import {Tags} from "./Tags";
import css from "./styles.module.scss";


export const CategoryCoupons = () => {
    const location: any = useLocation();
    const params = useParams();
    const [page, setPage] = useState(1);
    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);
    const [tags, setTags] = useState<DTO.Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<DTO.Tag>();


    useEffect(() => {
        if (!selectedTag)
            return;
        (async () => {
            try {
                const response = await axiosInstance.get(`/coupons/subcategory/${params.id}?page=1&tags=${selectedTag.id}`);
                const result: DTO.Coupon[] = response.data.results;
                // TODO: rename and fix
                const couponInfos = result//_.take(result, 8)
                    .map((x: DTO.Coupon) => couponModel.convertToCouponInfo(x));
                setCoupons(couponInfos);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [selectedTag]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get("tags");
                const result: DTO.Tag[] = response.data;
                setTags(result);
                setSelectedTag(result[0]);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);


    const onLoadMoreClick = () => {
        setPage(prev => prev + 1);
        console.log(page);
    };


    return (
        <main className={css.main}>
            <div className={cn("container", css.container)}>
                <h2 className={css.title}>
                    Категория: {location.state.name}
                </h2>
                <Tags
                    tags={tags}
                    selectedItem={selectedTag}
                    onSelectedItem={(tag) => setSelectedTag(tag)}
                />
                <CardsContainer
                    cards={coupons}
                    render={(x, i) => <CouponCard key={x.id} info={x}/>}
                />
                <Button className={css.button} onClick={onLoadMoreClick}>
                    Загрузить еще
                </Button>
            </div>
        </main>
    );
};