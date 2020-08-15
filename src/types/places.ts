export type PlaceType = {
    _id: string;
    title: string;
    img?: {
        preview: string;
        alt: string;
        all: string[];
    };
    description?: string;
    country?: string;
    city?: string;
    tags?: string[];
    coord?: number;
    data?: {
        website: string;
    };
};
