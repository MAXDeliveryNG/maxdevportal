import { AppKey } from 'app/models/data/app-key';

export interface App {
    id?: string;
    user_id?: string;
    name: string;
    description?: string;
    webhook_url?: string;
    keys?: AppKey[];
    updated_at: Number;
    created_at: Number
}
