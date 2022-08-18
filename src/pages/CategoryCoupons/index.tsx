import {useState, useEffect} from "react";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, CouponInfo} from "@/entities/CouponCard";
import {CardsContainer} from "@/features/CardsContainer";
import {Button} from "@/shared/ui/Button";
import {Tags} from "./Tags";
import css from "./styles.module.scss";
import {useLocation, useParams} from "react-router-dom";



export const CategoryCoupons = () => {
    const location: any = useLocation();
    const params = useParams();
    const [page, setPage] = useState(1);
    const [coupons, setCoupons] = useState<CouponInfo[]>([]);
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
                    .map((x: DTO.Coupon): CouponInfo => ({
                        id: x.id,
                        title: x.title,
                        previewImage: x.preview_image,
                        companyName: x.company_name,
                        companyLogo: x.company_logo,
                        isFavorite: x.is_favorite,
                        couponPrice: Number(x.price_for_coupon),
                        productPrice: Number(x.price),
                        discount: x.discount_percent
                    }));
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