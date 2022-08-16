export interface Coupon {
    id: number,
    title: string,
    preview_image: string,
    discount_percent: number,
    price: string,  // TODO: back: почему строка и почему бек хранит старую цену, процент скидки и новую цену.
                    //   новую цену можно на фроне посчитать
    old_price: string,
    company_name: string, // TODO: back: нужен id компании, как делать переход на страницу компании
    company_logo: string,
    is_favorite: boolean,
    is_bought: boolean,
    is_active: boolean,
    conditions: string,
    description: string,
    order: number,
    price_for_coupon: string // TODO: back: почему строка
}


export interface SlideImage {
    image: string
}

export interface Tag {
    id: number,
    title: string
}

export interface CouponDetailsType {
    id: number,
    title: string,
    description: string,
    conditions: string,
    preview_image: string,
    discount_percent: number,
    price_for_coupon: string,
    price: string,
    old_price: string,
    company_id: number,
    company_name: string,
    company_logo: string,
    start_active_date: string,
    end_active_date: string,
    bought_quantity: number,
    images: [
         { id: number, image: string }
    ],
    similar_products: string[],
    qr_coupon: null,
    map_locations: string[]
}