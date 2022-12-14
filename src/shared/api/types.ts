export interface UserInfo {
    access: string;
    phone: string;
    first_name: string;
    last_name: string;
}


export interface PhoneAuthData {
    phone: string;
    password: string;
    first_name: string;
    last_name: string;
    password2: string;
}

export interface RecoveryData {
    phone: string;
    confirmation_code?: string,
    new_password?: string,
    new_password_repeat?: string
}

export type PhoneAuthConfirmData = PhoneAuthData & {
    confirmation_code: string;
}

export interface ContactInfo {
    vkontakte: string;
    instagram: string;
    odnoklassniki: string;
    facebook: string;
    whatsapp: string;
    email: string;
    phone: string;
    address: string;
    phone1: string;
    phone2: string;
    phone3: string;
    description: string;
}


export interface Coupon {
    id: number;
    title: string;
    preview_image: string;
    discount_percent: number;
    price: string;  // TODO: back: почему строка и почему бек хранит старую цену, процент скидки и новую цену.
                    //   новую цену можно на фроне посчитать
    old_price: string;
    company_name: string; // TODO: back: нужен id компании, как делать переход на страницу компании
    company_logo: string;
    is_favorite: boolean;
    is_bought: boolean;
    is_active: boolean;
    conditions: string;
    description: string;
    order: number;
    price_for_coupon: string; // TODO: back: почему строка
}

export interface SearchResult {
    count: number;
    next?: null;
    previous?: null;
    results: Coupon[];
}


export interface SlideImage {
    image: string;
}


export interface Tag {
    id: number;
    title: string;
}


export interface FaqItem {
    question: string;
    answer: string;
}


export interface PartnerNetworkInfo {
    instagram: string;
    facebook: string;
    whatsapp: string;
    telegram: string;
    vkontakte: string;
    odnoklassniki: string;
}

interface Address {
    address: string;
    phone: string;
    geolocation: string;
}

export interface Partner {
    id: number;
    company_name: string;
    logo: string;
    address: string;
    email: string;
    phone1: string;
    phone2: string;
    phone3: string;
    description: string;
    network: PartnerNetworkInfo;
    coupons: Coupon;
    coordinates: Address[];
}

export interface CouponDetailsType {
    id: number;
    title: string;
    description: string;
    conditions: string;
    preview_image: string;
    discount_percent: number;
    price_for_coupon: string;
    price: string;
    old_price: string;
    company_id: number;
    company_name: string;
    company_logo: string;
    start_active_date: string;
    end_active_date: string;
    bought_quantity: number;
    // TODO: исправить тип
    images: [
        { id: number; image: string }
    ];
    similar_products: string[];
    qr_coupon: null;
    map_locations: string[];
}
