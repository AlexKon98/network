import {BranchCity, CatalogPrice, Image, Link, Phone} from "~/domains/Base/base.models";
import {RequestResponse} from "~/domains/Request/request.model";

export interface PageResponse extends RequestResponse{
    data: Page
}

export interface Page extends PageInitData {
    initData: PageInitData;
    type?: string;
    title?: string;
    redirectUrl?: string;
    mainMenu?: Array<PageMainMenu>;
    seo?: PageSeo;
    customScripts?: PageCustomScripts;
    breadcrumbs?: Array<Link & any>;
}

export interface PageCustomScripts {
    urls?: Array<string>;
    scripts?: Array<string>;
    sendPulse?: Array<string>;
}

export interface PageInitData {
    recaptchaKey?: string;
    branches?: Array<BranchCity>;
    myTargetId?: string;
    topMenu?: Array<Menu>;
    topMenuMobile?: Array<Menu>
    footerCatalogMenu?: Array<Menu>;
    footerMenuMobile?: Array<Menu>;
    footerInfoMenu?: Array<Menu>;
    phones?: Array<Phone>;
    workTime?: string;
    lang?: string;
    domainCityName?: string;
    domainCityNameEn?: string;
    spread?: Array<string>;
    social?: PageInitDataSocial;
}

export interface PageInitDataSocial {
    vk?: string;
    facebook?: string;
    youtube?: string;
}

export interface PageMainMenu {
    menu?: CatalogMenu;
    isOpen?: boolean;
}

export interface PageSeo {
    href?: string;
    title?: string;
    meta?: Array<any>;
    links?: Array<any>;
}

export interface PagesResolveBody {
    needInitData?: boolean;
    isDesktop?: boolean;
    url?: string;
}

export interface CatalogMenu {
    activeSection?: CatalogMenuActiveSection;
    sections?: Array<CatalogMenuSections>;
}

export interface CatalogMenuActiveSection {
    items?: Array<CatalogMenuActiveSectionItems1>;
    brands?: CatalogMenuActiveSectionBrands;
    special?: CatalogMenuActiveSectionSpecial;
}

export interface CatalogMenuActiveSectionBrands {
    name?: string;
    showAll?: CatalogMenuActiveSectionBrandsShowAll;
    items?: Array<Image>;
}

export interface CatalogMenuActiveSectionBrandsShowAll {
    name?: string;
    url?: string;
}

export interface CatalogMenuActiveSectionItems {
    name?: string;
    url?: string;
}

export interface CatalogMenuActiveSectionItems1 {
    name?: string;
    showAll?: CatalogMenuActiveSectionShowAll;
    items?: Array<CatalogMenuActiveSectionItems>;
}

export interface CatalogMenuActiveSectionShowAll {
    name?: string;
    url?: string;
}

export interface CatalogMenuActiveSectionSpecial {
    name?: string;
    image?: Image;
    url?: string;
}

export interface CatalogMenuItems {
    name?: string;
    url?: string;
    shown?: boolean;
    submenu?: CatalogMenuSubmenu;
    promotion?: CatalogMenuPromotion;
}

export interface CatalogMenuPromotion {
    name?: string;
    image?: Image;
    price?: CatalogPrice;
}

export interface CatalogMenuSections {
    name?: string;
    url?: string;
    items?: Array<CatalogMenuItems>;
}

export interface CatalogMenuSubmenu {
    label?: CatalogMenuSubmenuLabel;
    items?: Array<CatalogMenuActiveSectionItems>;
}

export interface CatalogMenuSubmenuLabel {
    name?: string;
    url?: string;
}

export interface Menu {
    name?: string;
    url?: string;
    items?: Array<MenuItems>;
}

export interface MenuItems {
    name?: string;
    url?: string;
    icon?: string;
    modifier?: string;
    active?: boolean;
    children?: Array<any>;
}
