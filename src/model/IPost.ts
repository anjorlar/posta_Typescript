
export interface IPosts {
    pid: number;
    title: string;
    text: string;
    date: string;
    country_id: string;
    language_id?: number;
    updatedStatus: boolean;
    updatedTime: []
}