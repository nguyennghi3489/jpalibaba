// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import { ADMIN, IMPORTER, RETAILER } from "provider/models";
import { appUrl } from "routing";
import AdminExportItem from "views/Pages/Admin/AdminExportItem";
import { MiscManagement } from "views/Pages/Admin/MiscManagement";
import SettingTemplate from "views/Pages/Admin/SettingTemplate";
import UpdateUserInfo from "views/Pages/Admin/UpdateUserInfo";
import UserManagementPage from "views/Pages/Admin/UserManagement";
import CheckoutPage from "views/Pages/CheckoutPage.js";
import CreateUserPage from "views/Pages/CreateUserPage.js";
import ForgotPasswordPage from "views/Pages/ForgotPasswordPage.js";
import HistoryPurchasePage from "views/Pages/HistoryPurchasePage.js";
import HomePage from "views/Pages/HomePage.js";
import CreateCampaignFlow from "views/Pages/Importer/Campaign/CreateCampaignFlow";
import CampaignManagement from "views/Pages/Importer/CampaignManagement";
import CreateNewCampaign from "views/Pages/Importer/CreateNewCampaign";
import CreateNewItemPage from "views/Pages/Importer/CreateNewItemPage";
import CreateNewPricePolicy from "views/Pages/Importer/CreateNewPricePolicy";
import ExportItemPage from "views/Pages/Importer/ExportItemPage";
import { GalleryManagement } from "views/Pages/Importer/Gallery";
import ImporterSettingPage from "views/Pages/Importer/ImporterSettingPage";
import ItemManagementPage from "views/Pages/Importer/ItemManagementPage";
import OrderManagementPage from "views/Pages/Importer/OrderManagementPage";
import ViewCampaign from "views/Pages/Importer/ViewCampaign";
import LoginPage from "views/Pages/LoginPage.js";
import ResetPasswordPage from "views/Pages/ResetPasswordPage.js";
import ProductDetailPage from "views/Pages/Retailer/ProductDetailPage.js";
import SearchPage from "views/Pages/Retailer/SearchPage.js";
import SignUpPage from "views/Pages/SignUpPage.js";
import UserProfile from "views/Pages/UserProfile.js";
import VerifyFailurePage from "views/Pages/VerifyFailurePage";
import VerifySuccessPage from "views/Pages/VerifySuccessPage";

var dashRoutes = [
  {
    path: "/verifyfailure",
    name: "Verify Mail Failure Page",
    mini: "L",
    component: VerifyFailurePage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: "/verifyEmail",
    name: "Verify Mail Success Page",
    mini: "L",
    component: VerifySuccessPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: "/resetPassword",
    name: "Reset Password Page",
    mini: "L",
    component: ResetPasswordPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password Page",
    mini: "L",
    component: ForgotPasswordPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: appUrl.loginPage,
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth",
    role: "all",
    show: false,
  },

  {
    path: appUrl.signupPage,
    name: "SignUp Page",
    mini: "PP",
    component: SignUpPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: appUrl.homePage,
    name: "Home Page",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: HomePage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: `${appUrl.publicCampaignDetailPage}/:id`,
    name: "Campaign Detail Page",
    rtlName: "عالتسعير",
    component: ProductDetailPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  {
    path: appUrl.searchPage,
    name: "Search Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: SearchPage,
    layout: "/auth",
    role: "all",
    show: false,
  },
  // ADMIN SECTION
  {
    path: appUrl.userManagementPage,
    name: "User Management",
    mini: "UM",
    component: UserManagementPage,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: true,
  },
  {
    path: "/admin-export-item",
    name: "Export",
    mini: "EX",
    component: AdminExportItem,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: true,
  },
  {
    path: "/admin-setting",
    name: "Template Setting",
    mini: "TS",
    component: SettingTemplate,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: true,
  },
  {
    path: appUrl.createUserPage,
    name: "Create User",
    mini: "AU",
    component: CreateUserPage,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: false,
  },
  {
    path: "/update-user-info/:id",
    name: "Update User Info",
    mini: "UU",
    component: UpdateUserInfo,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: false,
  },
  {
    path: appUrl.miscManagementPage,
    name: "Category and Origin",
    mini: "CO",
    component: MiscManagement,
    layout: "/admin",
    authenticate: true,
    role: ADMIN,
    show: true,
  },

  /// RETAILER SECTION
  // {
  //   path: "/order-page",
  //   name: "Order Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: OrderPage,
  //   layout: "/auth",
  //   role: RETAILER,
  //   show: true
  // },
  // {
  //   path: "/order-success-page",
  //   name: "Order Success Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: OrderSuccessPage,
  //   layout: "/auth",
  //   role: RETAILER,
  //   show: true
  // },
  {
    path: "/checkout",
    name: "Checkout Page",
    rtlName: "عالتسعير",
    mini: "CP",
    rtlMini: "ع",
    component: CheckoutPage,
    layout: "/admin",
    role: RETAILER,
    show: true,
  },
  {
    path: "/history",
    name: "History Page",
    rtlName: "عالتسعير",
    mini: "HP",
    rtlMini: "ع",
    component: HistoryPurchasePage,
    layout: "/admin",
    role: RETAILER,
    show: true,
  },
  {
    path: appUrl.userPage,
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    mini: "UP",
    rtlMini: "شع",
    component: UserProfile,
    layout: "/admin",
    role: RETAILER,
    show: false,
  },

  /// IMPORTER SECTION
  {
    path: appUrl.productManagementPage,
    name: "Item Management",
    rtlName: "عالتسعير",
    mini: "IM",
    rtlMini: "ع",
    component: ItemManagementPage,
    layout: "/admin",
    role: IMPORTER,
    show: true,
  },
  {
    path: `${appUrl.campaignManagementPage}/:id?`,
    name: "Campaign Management",
    rtlName: "عالتسعير",
    mini: "CM",
    rtlMini: "ع",
    component: CampaignManagement,
    layout: "/admin",
    role: IMPORTER,
    show: true,
  },
  // {
  //   path: "/price-policy",
  //   name: "Price Policy",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: PricePolicyPage,
  //   layout: "/admin",
  //   role: IMPORTER,
  //   show: false,
  // },
  {
    path: "/order-management",
    name: "Order Management",
    rtlName: "عالتسعير",
    mini: "OM",
    rtlMini: "ع",
    component: OrderManagementPage,
    layout: "/admin",
    role: IMPORTER,
    show: true,
  },

  {
    path: "/importer-setting",
    name: "Notification Setting",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ImporterSettingPage,
    layout: "/admin",
    role: IMPORTER,
    show: true,
  },
  {
    path: "/login",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth",
    role: IMPORTER,
    show: false,
  },
  {
    path: appUrl.userPage,
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    mini: "UP",
    rtlMini: "شع",
    component: UserProfile,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: "/export-item",
    name: "Export Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ExportItemPage,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: appUrl.createProductPage,
    name: "Item Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewItemPage,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: `${appUrl.createProductPage}/:id`,
    name: "Item Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewItemPage,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: `${appUrl.createCampaignPage}/:id`,
    name: "Create Campaign Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewCampaign,
    collapse: false,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: appUrl.createCampaignFlowPage,
    name: "Create Campaign Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateCampaignFlow,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },

  {
    path: "/create-price-policy",
    name: "Create Price Policy Setting",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewPricePolicy,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },
  {
    path: `${appUrl.campaignDetailPage}/:id`,
    name: "Campaign View",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ViewCampaign,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },

  {
    path: "/create-price-policy-page",
    name: "Create Price Policy Setting",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewPricePolicy,
    layout: "/admin",
    role: IMPORTER,
    show: false,
  },

  {
    path: appUrl.galleryManagement,
    name: "Gallery management",
    rtlName: "عالتسعير",
    mini: "GM",
    rtlMini: "ع",
    component: GalleryManagement,
    layout: "/admin",
    role: IMPORTER,
    show: true,
  },

  //     {
  //       path: "/order-page",
  //       name: "Order Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: OrderPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/order-success-page",
  //       name: "Order Success Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: OrderSuccessPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/checkout-page",
  //       name: "Checkout Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CheckoutPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/history-page",
  //       name: "History Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: HistoryPurchasePage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/search-page",
  //       name: "Search Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: SearchPage,
  //       layout: "/auth"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Importer Section",
  //   rtlName: "صفحات",
  //   icon: Image,
  //   state: "abc",
  //   views: [
  //     {
  //       path: "/signup-page",
  //       name: "SignUp Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: SignUpPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/login-page",
  //       name: "Login Page",
  //       rtlName: "هعذاتسجيل الدخول",
  //       mini: "L",
  //       rtlMini: "هعذا",
  //       component: LoginPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/user-page",
  //       name: "User Profile",
  //       rtlName: "ملف تعريفي للمستخدم",
  //       mini: "UP",
  //       rtlMini: "شع",
  //       component: UserProfile,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/export-item-page",
  //       name: "Export Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: ExportItemPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/create-item-page",
  //       name: "Item Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CreateNewItemPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/create-campaign-page",
  //       name: "Create Campaign Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CreateNewCampaign,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/price-policy-page",
  //       name: "Price Policy Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: PricePolicyPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/campaign-page",
  //       name: "Campaign Management",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CampaignManagement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/item-management-page",
  //       name: "Item Management",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: ItemManagementPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/order-management-page",
  //       name: "Order Management",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: OrderManagementPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/importer-setting-page",
  //       name: "Notification Setting",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: ImporterSettingPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/create-price-policy-page",
  //       name: "Create Price Policy Setting",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CreateNewPricePolicy,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Admin Section",
  //   rtlName: "صفحات",
  //   icon: Image,
  //   state: ADMIN,
  //   views: [
  //     {
  //       path: "/user-management-page",
  //       name: "User Management Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: UserManagementPage,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/admin-export-item",
  //       name: "Export Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: AdminExportItem,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/admin-setting",
  //       name: "Template Setting Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: SettingTemplate,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/create-user-page",
  //       name: "Create User Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: CreateUserPage,
  //       layout: "/admin"
  //     }
  //   ]
  // }
  // {
  //   path: "/home-page",
  //   name: "Home Page",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: HomePage,
  //   layout: "/auth"
  // },
  // {
  //   path: "/product-detail-page",
  //   name: "Product Detail Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: ProductDetailPage,
  //   layout: "/auth"
  // },
  // {
  //   path: "/search-page",
  //   name: "Search Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: SearchPage,
  //   layout: "/auth"
  // },
  // {
  //   path: "/signup-page",
  //   name: "SignUp Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: SignUpPage,
  //   layout: "/auth"
  // },
  // {
  //   path: "/login-page",
  //   name: "Login Page",
  //   rtlName: "هعذاتسجيل الدخول",
  //   mini: "L",
  //   rtlMini: "هعذا",
  //   component: LoginPage,
  //   layout: "/auth"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   mini: "UP",
  //   rtlMini: "شع",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/price-policy-page",
  //   name: "Price Policy Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: PricePolicyPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/campaign-page",
  //   name: "Campaign Management",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: CampaignManagement,
  //   layout: "/admin"
  // },
  // {
  //   path: "/export-item-page",
  //   name: "Export Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: ExportItemPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/view-campaign",
  //   name: "Campaign View",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: ViewCampaign,
  //   layout: "/admin"
  // },
  // {
  //   path: "/create-campaign-page",
  //   name: "Create Campaign Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: CreateNewCampaign,
  //   layout: "/admin"
  // },
  // {
  //   path: "/item-management-page",
  //   name: "Item Management",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: ItemManagementPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/campaign-page",
  //   name: "Campaign Management",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: CampaignManagement,
  //   layout: "/admin"
  // },

  // {
  //   path: "/price-policy-page",
  //   name: "Price Policy Page",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: PricePolicyPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/order-management-page",
  //   name: "Order Management",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: OrderManagementPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/importer-setting-page",
  //   name: "Notification Setting",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: ImporterSettingPage,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
