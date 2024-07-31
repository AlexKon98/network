export interface FeedbackForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CallbackForm {
  name: string;
  phone: string;
}

export interface ErrorForm {
  comment: string;
}

export interface VerificationForm {
  id: number []
  name: string,
  email: string,
  phone: string,
  comment: string,
  file: string
}

export interface BuybackForm {
  name: string;
  phone: string;
  email: string;
  comment: string;
  photo: string;
}

export interface ReviewProductForm {
  productId: number;
  name: string;
  email: string;
  positiveText: string;
  negativeText: string;
  comment: string;
  rate: number;
  images: Array<File>;
}

export interface TradeInProductForm {
  name: string;
  phone: string;
  productId: number;
}

export interface RepairStatusBadge {
  text?: string,
  textColor?: string,
  backColor?: string
}

export interface CheckFormItem {
  orderNumber?: number | string,
  productModel?: string,
  serialNumber?: number,
  issueDate?: string,
  paymentStatus?: string,
  price?: number,
  type?: string,
  repairStatusBadge?: RepairStatusBadge
}

export interface OrderStatusItem {
  description?: string
}

export interface CheckVerificationFormItem {
    invoiceNumber?: string,
    service?: string,
    name?: string,
    status?: string,
    statusXmlId?: string,
    link?: string,
    totalSum?: string,
    orderStatus?: Array<OrderStatusItem>
    serialNumber?: string,
    owner?: string,
    inn?: string,
    issueDate?: string,
    productSum?: string,
    documents?: string
}

export interface CheckFormRepair {
  orderNumber?: number | string,
  orderDate?: string,
  itemsCount?: number,
  items?: Array<CheckFormItem>
}

export interface CheckFormRepairs {
  repairs?: Array<CheckFormRepair>
}

export interface CheckVerificationFormResponse {
  actName?: string,
  entries?: Array<CheckVerificationFormItem>
}

export interface CheckForm {
  orderNumber: number | string
}

export interface CheckVerificationForm {
  invoice_number: number;
}

export interface RentForm {
  name: string;
  phone: string;
  message: string;
  productId: number,
  duration: number,
}

export interface RepairForm {
  name: string;
  phone: string;
  message: string;
  files: Array<File>
}

export interface InformAdmissionFormParams {
  name: string;
  phone: string;
  productId: number;
  message: string;
  sessid?: string;
}

export interface personalManagerForm {
  message: string;
  photo: Array<File>
}

export interface personalManagerResponse {
  ticketNumber: number;
}

export interface DemoPresentationForm {
  productId: number;
  name: string;
  phone: string;
  message: string;
}

export interface ConsultationForm {
  productId: number;
  name: string;
  phone: string;
  message: string;
}

export interface WholesaleForm {
  productId: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ServiceReviewForm {
  fio: string;
  email: string;
  pros: string;
  cons: string;
  review: string;
  rating: number | string;
}
