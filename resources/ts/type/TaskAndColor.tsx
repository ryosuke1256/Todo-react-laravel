export type TaskAndColor = {
    id?: number;
    user_id?: number;
    title?: string;
    is_done?: 0 | 1;
    created_at?: string;
    updated_at?: string;
    red?: boolean;
    blue?: boolean;
    yellow?: boolean;
    green?: boolean;
    hasDonePostTag: boolean;
};
