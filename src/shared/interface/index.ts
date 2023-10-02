export interface UserTypes {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    surname: string; // Отчество
    role: UserRoleTypes;
}

export interface UserRoleTypes {
    id: number;
    name: string;
    role_type: string;
}
