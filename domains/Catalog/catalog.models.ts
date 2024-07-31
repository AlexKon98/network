import { RequestResponse } from '~/domains/Request/request.model';

export interface Variants {
  id: number,
  price: number,
  name: string,
  article: string,
  disableIds: number[],
  requireIds: number[]
}

interface Sticker {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  code?: string;
  image?: string
  mainTag?: boolean
  name?: string
}

export interface SliderImage {
  src?: string,
  big?: string,
  small?: string,
  medium?: string,
  alt?: string,
}

export interface CatalogProduct {
  id: number,
  offerId: number,
  name: string,
  shortName: string,
  uniqueOffer: string,
  url: string,
  productCode: number,
  stickers: Sticker[],
  priceRequestTemplate: string,
  images: {
    main: SliderImage,
    slider: SliderImage[]
  },
  stock: boolean,
  showStock: boolean,
  description: string,
  price: {
    price: number,
    priceOld: number
  },
  rating: number,
  reviews: string,
  reviewsCount: number,
  manager: [],
  additional: string,
  mainButton: string,
  allowCompare: boolean,
  inFavorite: boolean,
  inCompare: boolean,
  inCart: boolean,
  managerPreview: boolean,
}

export interface Accessor {
  id: string,
  name: string,
  count: number,
  products: { [key: string]: CatalogProduct};
}

export interface Zond {
  id: string,
  name: string,
  count: number,
  products: { [key: string]: CatalogProduct};
}

export interface Review {
  commentText: string,
  date: string,
  dislikeCount: number,
  id: number | string,
  images: Array<object>,
  isYandexReview: boolean
  likeCount: number
  name: string
  negativeText: string
  positiveText: string
  rating: number
}

export interface Slider {
  title: string,
  url: {
    label: string,
    url: string,
  },
  items: CatalogProduct[];
}

export interface getProductAccessorsProps {
  productId: number,
  availableToBuy: boolean
}

export interface ProductAccessors {
  productAccessors: { [key: string]: Accessor };
}

export interface ProductZonds {
  zonds: { [key: string]: Zond };
}

export interface GetAccessorsResponse extends RequestResponse {
  productAccessors: { [key: string]: Accessor };
}

export interface GetZondsResponse extends RequestResponse {
  zonds: { [key: string]: Zond };
}

export interface ProductReviews {
  reviews: {
    count: number,
    images:Array<object>,
    items: Array<Review>,
    rating: number
  }
}

export interface HomeSliders {
  sliders: Slider[];
}

export interface GetHomeSlidersResponse extends RequestResponse {
  sliders: Slider[];
}

export interface Options extends Variants {
  configurationText: string
}

export interface ProductOptions {
  variants: Record<string, Variants>,
  options: Record<string, Options>
}

export interface Sort {
  name?: string,
  by?: string,
  order?: string,
  isActive?: boolean
}

export interface FilterDelPropLinks {
  id?: string;
  propId?: number;
  name?: string;
  url?: string;
}

export interface FilterPropChecks {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  count?: number;
}

export interface FilterPropHint {
  title?: string;
  text?: string;
  videoUrl?: string;
}

export interface FilterPropRange {
  minValue?: number;
  maxValue?: number;
  inputName?: string;
}

export interface FilterMainProp {
  title?: string;
  id?: string;
  type?: string;
  hint?: FilterPropHint;
  inputName?: string;
  boolean?: boolean;
  range?: FilterPropRange;
  checks?: FilterPropChecks;
}

export interface Filter {
  clearUrl: String,
  delPropLinks: FilterDelPropLinks[],
  mainProps: FilterMainProp[],
  managerProps: FilterMainProp[],
}

export interface selectedFilter {
  id?: String,
  propId?: String,
  checks?: String[],
  min?: Number,
  max?: Number,
}

export interface getCatalogProductsProps {
  sectionId: number,
  page: number,
  sort: Sort,
  filter?: selectedFilter[],
}

export interface getBrandsProductsProps {
  url: string,
  page: number,
  productIds: number[]
  sort: Sort,
  filter: selectedFilter[],
}

export interface getFiltersProps {
  sectionId: number | string,
  url: string,
  productIds: string[],
  filter: selectedFilter[],
}

export interface CatalogProducts {
  products: CatalogProduct[]
}

export interface CatalogData {
    url?: String,
    totalCount?: Number,
    products?: CatalogProduct,
    filter?: Filter,
    brandId?: string,
}

export interface getCatalogProductsResponse extends RequestResponse {
  data: CatalogData
}

export interface BlogTag {
  id: number,
  name: string,
  url: string
}

export interface BlogProduct {
  dateCreate: string,
  dateCreateRus: string,
  name: string,
  previewText: string,
  url: string,
  videoUrl: string,
  tags: BlogTag[],
  image: {
    src: string,
    big: string,
    small: string,
    medium: string,
    alt: string
  }
}

export interface BlogRelink {
  name: string,
  sort: string,
  isActive: boolean
}

export interface Tag {
  name: string,
  sort: string,
  isActive: boolean
}

export interface getBlogProductsProps {
  sectionId: number,
  page: number,
  sort: Sort,
  tags: Tag[]
}

export interface getSpecialProductsProps {
  sectionType: string,
  url: string,
  page: number,
  productIds: number[]
  sort: Sort,
  filter: selectedFilter[]
}

export interface GetSaleProductsProps {
  promotionId: number,
  page: number,
  sort: Sort,
  filter: selectedFilter[],
}

export interface getSearchProductsProps {
  page: number,
  productIds: number[]
  filter: selectedFilter[]
}

export interface GetSaleProductsResponse extends RequestResponse {
  url: String,
  totalCount: Number,
  products: CatalogProduct,
  filter: Filter
}

export interface getBlogProductsResponse extends RequestResponse {
  totalProductCount: Number,
  relinks: BlogRelink[],
  url: String,
  products: BlogProduct[]
}

export interface getFiltersResponse extends RequestResponse {
  url?: String,
  filteredUrl?: string,
  filteredProductCount?: Number,
  totalProductCount?: Number,
  products: CatalogProduct,
  filter: Filter,
  managerFilterUrl?: string,
}

export interface SearchBlog {
  items?: Array<BlogProduct>;
  pageProductCount: number,
  totalProductCount: number,
  totalPagesCount: number
}

export interface SearchBlogResponse extends RequestResponse{
  data: SearchBlog
}

export interface BlogSearchData {
  query: string,
  sectionId: number,
}
