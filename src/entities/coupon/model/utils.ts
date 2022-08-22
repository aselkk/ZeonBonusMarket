import {DTO} from "@/shared/api";
import {CouponInfo} from "./types";


export const convertToCouponInfo = (obj: DTO.Coupon): CouponInfo => {
    return {
        id: obj.id,
        title: obj.title,
        previewImage: obj.preview_image,
        companyName: obj.company_name,
        companyLogo: obj.company_logo,
        isFavorite: obj.is_favorite,
        couponPrice: Number(obj.price_for_coupon),
        productPrice: Number(obj.price),
        discount: obj.discount_percent
    };
};