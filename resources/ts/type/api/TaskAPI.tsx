export type TaskAPI = {
    id?: number;
    user_id: number | null;
    title?: string;
    is_done?: 0 | 1;
    created_at?: string;
    updated_at?: string;
};
