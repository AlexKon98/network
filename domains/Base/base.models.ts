export interface Image {
    src?: string;
    big?: string;
    small?: string;
    medium?: string;
    alt?: string;
}

export interface CatalogPrice {
    price?: number;
    priceOld?: number;
}

export interface Link {
    label?: string;
    url?: string;
}

export interface BranchCity {
    name?: string;
    nameEn?: string;
    phone?: string;
    phoneFormatted?: string;
    email?: string;
    domain?: string;
    region?: string;
}

export interface Phone {
    value?: string;
    valueFormatted?: string;
}
