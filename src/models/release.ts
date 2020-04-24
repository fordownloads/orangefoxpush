export interface IRelease {
    build_type: string;
    changelog: string;
    bugs: string;
    notes: string;
    codename: string;
    date: string;
    actualDate: Date;
    file_name: string;
    file_path: string;
    md5: string;
    sf: {
        path: string;
        url: string;
    }
    size_bytes: number;
    size_human: string;
    direct_url: string;
    url: string;
    version: string;
}
