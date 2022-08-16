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

