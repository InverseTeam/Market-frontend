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

export interface ProductTypes {
    id: number;
    cover: string;
    name: string;
    description: string;
    category: ProductCategoryTypes;
    shop: ProductShop;
    compound: string;
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
    weight: number;
    start_price: number;
    current_price: number;
    amount: number;
    expiration: number;
}

export interface ProductCategoryTypes {
    id: number;
    name: string;
}

export interface ProductShop {
    id: number;
    name: string;
    category: ShopCategory;
}

export interface ShopCategory {
    id: number;
    name: string;
}
