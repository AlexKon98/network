import { Context } from '@nuxt/types';
import { pagesResolveController } from '~/domains/Page/page.controllers';

interface deviceComponent {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface RouterData {
  pageData: any;
  componentPage: deviceComponent;
}

const routeMap = new Map([
  // /
  ['index', {
    desktop: 'MainDesktop',
    tablet: 'MainTablet',
    mobile: 'MainMobile'
  }],
  // /catalog
  ['catalog-root', {
    desktop: 'CatalogRootDesktop',
    tablet: 'CatalogRootTablet',
    mobile: 'CatalogRootMobile'
  }],
  // /kontrolno-izmeritelnyie-priboryi
  ['catalog-sections', {
    desktop: 'CatalogSectionDesktop',
    tablet: 'CatalogSectionTablet',
    mobile: 'CatalogSectionMobile'
  }],
  // /catalog/opticheskie-niveliryi
  ['catalog', {
    desktop: 'CatalogDesktop',
    tablet: 'CatalogTablet',
    mobile: 'CatalogMobile'
  }],
  // /shema-proezda-prohoda.html/
  ['contacts', {
    desktop: 'ContactsDesktop',
    tablet: 'ContactsTablet',
    mobile: 'ContactsMobile'
  }],
  // /oplata-i-dostavka/
  ['payment_and_delivery', {
    desktop: 'PaymentAndDeliveryDesktop',
    tablet: 'PaymentAndDeliveryTablet',
    mobile: 'PaymentAndDeliveryMobile'
  }],
  ['payment_result', {
    desktop: 'PaymentAndDeliveryDesktop',
    tablet: 'PaymentAndDeliveryTablet',
    mobile: 'PaymentAndDeliveryMobile'
  }],
  // /set-referentsnykh-bazovykh-stantsiy/ - все точки
  // /servis/set-referentsnykh-bazovykh-stantsiy-smartet/ - SmartNet
  // /servis/set-referentsnykh-bazovykh-stantsiy-prin-net/ - PRINNET
  ['service_base_stations', {
    desktop: 'StationsDesktop',
    tablet: 'StationsTablet',
    mobile: 'StationsMobile'
  }],
  // /dileram/
  ['dealers', {
    desktop: 'DealersDesktop',
    tablet: 'DealersTablet',
    mobile: 'DealersMobile'
  }],
  // /buyback/
  ['service_buyback', {
    desktop: 'BuybackDesktop',
    tablet: 'BuybackTablet',
    mobile: 'BuybackMobile'
  }],
  // /trade-in/
  ['service_trade', {
    desktop: 'TradeInDesktop',
    tablet: 'TradeInTablet',
    mobile: 'TradeInMobile'
  }],
  // /servis/lizing/
  ['service_leasing', {
    desktop: 'LeasingDesktop',
    tablet: 'LeasingTablet',
    mobile: 'LeasingMobile'
  }],
  // /o-kompanii/
  ['about', {
    desktop: 'AboutDesktop',
    tablet: 'AboutTablet',
    mobile: 'AboutMobile'
  }],
  // /brands/
  ['brands', {
    desktop: 'BrandsDesktop',
    tablet: 'BrandsTablet',
    mobile: 'BrandsMobile'
  }],
  // /products/teplovizor-hikmicro-e1l
  ['detail', {
    desktop: 'ProductDesktop',
    tablet: 'ProductTablet',
    mobile: 'ProductMobile'
  }],
  // /servis/
  ['service', {
    desktop: 'ServiceDesktop',
    tablet: 'ServiceTablet',
    mobile: 'ServiceMobile'
  }],
  // /basket/
  ['basket', {
    desktop: 'CartDesktop',
    tablet: 'CartTablet',
    mobile: 'CartMobile'
  }],
  // /spasibo_za_zakaz.html?ORDER_ID=число&SITE_TEMPLATE=basket
  ['order-success', {
    desktop: 'OrderSuccessDesktop',
    tablet: 'OrderSuccessTablet',
    mobile: 'OrderSuccessMobile'
  }],
  // /shared-basket/?share=kjhsdggasfdgasdfaasehdfawehdcawdhrcawhd
  ['shared-basket', {
    desktop: 'CartDesktop',
    tablet: 'CartTablet',
    mobile: 'CartMobile'
  }],
  // /send_application/data_transfer_conditions.php
  ['personal-agreement', {
    desktop: 'PersonalDataDesktop',
    tablet: 'PersonalDataTablet',
    mobile: 'PersonalDataMobile'
  }],
  // /servis/remont.html
  ['service_repairs', {
    desktop: 'RepairDesktop',
    tablet: 'RepairTablet',
    mobile: 'RepairMobile'
  }],
  ['service_repairs_detail', {
    desktop: 'RepairDetailDesktop',
    tablet: 'RepairDetailTablet',
    mobile: 'RepairDetailMobile'
  }],
  // /servis/arenda.html
  ['service_rent', {
    desktop: 'ServiceRentDesktop',
    tablet: 'ServiceRentTablet',
    mobile: 'ServiceRentMobile'
  }],
  ['rent', {
    desktop: 'RentDesktop',
    tablet: 'RentTablet',
    mobile: 'RentMobile'
  }],
  ['rent-detail', {
    desktop: 'RentDetailDesktop',
    tablet: 'RentDetailTablet',
    mobile: 'RentDetailMobile'
  }],
  // /oformlenie_zakaza.html
  ['order', {
    desktop: 'OrderDesktop',
    tablet: 'OrderTablet',
    mobile: 'OrderMobile'
  }],
  // /informatsiya
  ['information', {
    desktop: 'BlogDesktop',
    tablet: 'BlogTablet',
    mobile: 'BlogMobile'
  }],
  // /hits
  ['special-section', {
    desktop: 'CatalogDesktop',
    tablet: 'CatalogTablet',
    mobile: 'CatalogMobile'
  }],
  // /informatsiya/stati
  ['information-section', {
    desktop: 'BlogArticlesDesktop',
    tablet: 'BlogArticlesTablet',
    mobile: 'BlogArticlesMobile'
  }],
  // /personal/profile
  ['personal-profile', {
    desktop: 'PersonalProfileDesktop',
    tablet: 'PersonalProfileTablet',
    mobile: 'PersonalProfileMobile'
  }],
  // /personal/wishlist
  ['personal-wishlist', {
    desktop: 'PersonalWishlistDesktop',
    tablet: 'PersonalWishlistTablet',
    mobile: 'PersonalWishlistMobile'
  }],
  // /personal/compare
  ['personal-compare', {
    desktop: 'PersonalCompareDesktop',
    tablet: 'PersonalCompareTablet',
    mobile: 'PersonalCompareMobile'
  }],
  // /personal/orders
  ['personal-order-list', {
    desktop: 'PersonalOrdersDesktop',
    tablet: 'PersonalOrdersTablet',
    mobile: 'PersonalOrdersMobile'
  }],
  // /personal/order/${id}
  ['personal-order-detail', {
    desktop: 'PersonalOrderDetailDesktop',
    tablet: 'PersonalOrderDetailTablet',
    mobile: 'PersonalOrderDetailMobile'
  }],
  // /personal/manager
  ['personal-manager', {
    desktop: 'PersonalManagerDesktop',
    tablet: 'PersonalManagerTablet',
    mobile: 'PersonalManagerMobile'
  }],
  // /personal/repair
  ['personal-repair', {
    desktop: 'PersonalRepairDesktop',
    tablet: 'PersonalRepairTablet',
    mobile: 'PersonalRepairMobile'
  }],
  // /personal/verification
  ['personal-verification', {
    desktop: 'PersonalVerificationDesktop',
    tablet: 'PersonalVerificationTablet',
    mobile: 'PersonalVerificationMobile'
  }],
  // /personal/downloads
  ['personal-downloads', {
    desktop: 'PersonalDownloadsDesktop',
    tablet: 'PersonalDownloadsTablet',
    mobile: 'PersonalDownloadsMobile'
  }],
  // /wishlist
  ['wishlist', {
    desktop: 'WishlistDesktop',
    tablet: 'WishlistTablet',
    mobile: 'WishlistMobile'
  }],
  // /compare
  ['compare', {
    desktop: 'CompareDesktop',
    tablet: 'CompareTablet',
    mobile: 'CompareMobile'
  }],
  // /search?search_string=%D0%BF%D0%B5%D0%BD%D0%B8%D1%81
  ['search', {
    desktop: 'CatalogDesktop',
    tablet: 'CatalogTablet',
    mobile: 'CatalogMobile'
  }],
  // /brands/rgk
  ['brand-catalog', {
    desktop: 'BrandsDetailDesktop',
    tablet: 'BrandsDetailTablet',
    mobile: 'BrandsDetailMobile'
  }],
  ['information-detail', {
    desktop: 'BlogDetailDesktop',
    tablet: 'BlogDetailTablet',
    mobile: 'BlogDetailMobile'
  }],
  // /sale.html
  ['sale', {
    desktop: 'SaleDesktop',
    tablet: 'SaleTablet',
    mobile: 'SaleMobile'
  }],
  // /sale/teplovizory-fluke-s-linzami-ochen-vygodno
  ['sale-section', {
    desktop: 'SaleDetailDesktop',
    tablet: 'SaleDetailTablet',
    mobile: 'SaleDetailMobile'
  }],
  // /servis/poverka
  ['service_verification', {
    desktop: 'VerificationDesktop',
    tablet: 'VerificationTablet',
    mobile: 'VerificationMobile'
  }],
  // /servis/poverka/request
  ['verification-request', {
    desktop: 'VerificationResultDesktop',
    tablet: 'VerificationResultTablet',
    mobile: 'VerificationResultMobile'
  }],
  ['newpay', {
    desktop: 'NewpayRedirectDesktop',
    tablet: 'NewpayRedirectTablet',
    mobile: 'NewpayRedirectMobile'
  }],
  // /for-business
  ['for-business', {
    desktop: 'ForBusinessDesktop',
    tablet: 'ForBusinessTablet',
    mobile: 'ForBusinessMobile',
  }],
  ['page404', {
    desktop: 'Desktop404',
    tablet: 'Tablet404',
    mobile: 'Mobile404'
  }],
  ['service-review', {
    desktop: 'ServiceReviewDesktop',
    tablet: 'ServiceReviewTablet',
    mobile: 'ServiceReviewMobile',
  }]
]);

const routerConverter = async function (ctx: Context): Promise<RouterData> {
  const needInitData = !(ctx.store.state?.isInitDataFetched ?? false);
  const data = {
    needInitData,
    isDesktop: ctx.$device.isDesktop,
    url: ctx.route.fullPath
  };

  const pageData = await pagesResolveController(ctx, data);
  await ctx.store.dispatch('setInitData', pageData);

  if (pageData?.type === 'page404') {
    if (process.server) {
      ctx.res.statusCode = 404;
    }
  }

  return {
    pageData,
    componentPage: routeMap.get(pageData?.type)
  };
};

const getDevice = function (context: Context) {
  if (context.$cookies.get('IS_FAKE_DESKTOP')) {
    return 'desktop';
  }

  return context.$cookies.get('DEVICE_TYPE') ||
    (context.$device.isTablet && 'tablet') ||
    (context.$device.isMobile && 'mobile') ||
    'desktop';
};

export { routerConverter, getDevice };
