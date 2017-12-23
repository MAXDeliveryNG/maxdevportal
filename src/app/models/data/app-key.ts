export interface AppKey {
    id?: string;
    app_id?: string;
    user_id?: string;
    is_revoked?: boolean;
    visible?: boolean;
    name: string;
    private_key?: string;
    public_key?: string;
    updated_at?: Number;
    created_at?: Number
}