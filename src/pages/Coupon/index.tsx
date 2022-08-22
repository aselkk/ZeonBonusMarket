import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import lstore from "store";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {SimpleMap} from "@/shared/ui/GoogleMap";
import {CouponDetails, Details} from "./CouponDetails";
import {Carousel} from "./Carousel";
import {CouponItems} from "./CouponItems";
import {CouponInfo} from "./CouponInfo";
import css from "./styles.module.scss";


export const Coupon = () => {
    const {id} = useParams();
    const [data, setCouponDetails] = useState<DTO.CouponDetailsType>();
    const [details, setDetails] = useState<Details>();

    
    useEffect(() => {
        (async () => {
            try { 
                const response = await axiosInstance.get(`coupons/${id}/`);
                response.data;
                const dsd: Details = {
                    id: response.data.id,
                    companyLogo: response.data.company_logo,
                    companyName: response.data.company_name,
                    companyId: response.data.company_id,
                    title: response.data.title,
                    couponPrice: Number(response.data.price_for_coupon),
                    discountPercent: response.data.discount_percent,
                    productPrice: Number(response.data.old_price),
                    isFavorite: false,
                    mapLocations: response.data.map_locations
                };
                setDetails(dsd);
                setCouponDetails(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        )();
    }, []);

    return (
        <>
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
            <div className={cn("container", css.mapWrapper)}>
                <div className={css.mapContainer}>
                    <SimpleMap info={details}/>
                </div>
                <div className={css.listWrapper}>
                    <ul className={css.list} >
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                        <li className={css.listItems}>
                            <p>Новокосино</p>
                            <p>г. Москва, ул. Городецкая, д. 5</p>
                            <p>+996 000 00 00 00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};