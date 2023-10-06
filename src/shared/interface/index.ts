export interface UserTypes {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    surname: string; // Отчество
    role: UserRoleTypes;
    organization: UserOrganization;
}

export interface UserRoleTypes {
    id: number;
    name: string;
    role_type: string;
}

export interface UserOrganization {
    id: number;
    name: string;
}

export interface OrderProductsTypes {
    id: number;
    product: ProductTypes;
    calories: number;
    protein: number;
    fats: number;
    carbohydёrates: number;
    weight: number;
    start_price: number;
    current_price: number;
    amount: number;
    compound: string;
    expiration: string;
}

export interface ProductTypes {
    id: number;
    cover: string;
    name: string;
    description: string;
    category: {
        id: number;
        name: string;
    };
    shop: ShopTypes;
    calories: string;
    protein: string;
    fats: string;
    carbohydrates: string;
    weight: string;
    start_price: string;
    current_price: string;
    amount: string;
    compound: string;
    expiration: string;
}

export interface ProductCategory {
    id: number;
    name: string;
}

export interface ShopTypes {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
    };
}

export interface OrderTypes {
    id: number;
    order_products: ProductTypes[];
    order_datetime: string;
    delivery_time: string;
    delivery_price: string;
    total_price: string;
    total_weight: string;
    fast: boolean;
    status: OrderStatusType;
    need_change: boolean;
}

export interface OrderStatusType {
    id: number;
    name: string;
    status_type: string;
}
