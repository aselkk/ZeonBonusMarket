import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import lstore from "store";
import cn from "classnames";

import {axiosInstance, DTO} from "@/shared/api";
import {CouponCard, couponModel} from "@/entities/coupon";
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
    const [coordinates, setCoordinates] = useState();
    const [coupons, setCoupons] = useState<couponModel.CouponInfo[]>([]);


    
    useEffect(() => {
        (async () => {
            try {
                // TODO: перенести, и конвертацию
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

                response.data.coordinates = response.data.map_locations;
                const couponRes: any = response.data.similar_products;
                const couponItems =
                    couponRes.map((x: DTO.Coupon) => couponModel.convertToCouponInfo(x));
                setCoupons(couponItems);
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
            <div className={cn("container", css.similarCouponsContainer)}>
                <h3>Похожие товары</h3>
                <div className={css.similarCoupons}>
                    {
                        coupons?.map(x => <CouponCard key={x.id} info={x}/>)
                    }
                </div>
            </div>
            <div className={cn("container", css.mapWrapper)}>
                <div className={css.mapContainer}>
                    <SimpleMap info={data}/>
                </div>
                <div className={css.listWrapper}>
                    <ul className={css.list} >
                        {data ? data.map_locations.map((x:any) => (
                            <li key={x.id} className={css.listItems}>{x.address}</li>
                        )) : null
                        }
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