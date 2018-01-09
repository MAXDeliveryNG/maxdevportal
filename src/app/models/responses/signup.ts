import { User } from "./index";

interface SignupResponseData {
    user: User;
    access_token: string;
}

export interface SignupResponse {
    status: string;
    message?: string;
    data: SignupResponseData;
}



