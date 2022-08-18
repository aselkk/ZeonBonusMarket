import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Carousel} from "./Carousel";
import {CouponDetails, Details} from "./CouponDetails";
import {CouponItems} from "./CouponItems";
import {CouponInfo} from "./CouponInfo";
import {axiosInstance} from "@/shared/api";
import {CouponDetailsType} from "@/shared/api/types";


import css from "./styles.module.scss";
import cn from "classnames";


export const Coupon = () => {
    const {id} = useParams();
    const [data, setCouponDetails] = useState<CouponDetailsType>();
    const [details, setDetails] = useState<Details>();

    
    useEffect(() => {
        (async () => {
            try { 
                const response = await axiosInstance.get(`coupons/${id}/`);
                response.data;
                const dsd: Details = {
                    companyLogo: response.data.company_logo,
                    companyName: response.data.company_name,
                    companyId: response.data.company_id,
                    title: response.data.title,
                    couponPrice: Number(response.data.price_for_coupon),
                    discountPercent: response.data.discount_percent,
                    productPrice: Number(response.data.old_price),
                    isFavorite: false
                };
                setDetails(dsd);
                setCouponDetails(response.data);
            } catch
            (err) {
                console.error(err);
            }
        }
        )();
    }, []);
    
    return (
        <div className={cn("container", css.root)}>
            <div className={css.slider}>
                <Carousel images={data?.images}/>
            </div>
            <div className={css.details}>
                <CouponDetails info={details}/>
                <CouponInfo     
                    begin={data?.start_active_date}
                    end={data?.end_active_date}
                    saled={data?.bought_quantity}
                />   
            </div>
            <div className={css.items}>
                <CouponItems 
                    description={data ? data.description : ""}
                    condition={data ? data.conditions : ""}
                />
            </div>
        </div>
    );
};