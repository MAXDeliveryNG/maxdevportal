export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    phone: string;
    photo: string;
    referral_code: string;
    is_active: string;
    role: string;
    roles?: any[] 
}

export interface Login {
    access_token: string;
    user: User;
}

export interface LoginResponse {
    status: string;
    message?: string;
    data?: Login
}