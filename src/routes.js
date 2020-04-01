import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";
import HomePage from "views/Pages/HomePage.js";
import CheckoutPage from "views/Pages/CheckoutPage.js";
import HistoryPurchasePage from "views/Pages/HistoryPurchasePage.js";
import CreateUserPage from "views/Pages/CreateUserPage.js";
import CreateUserClientPage from "views/Pages/CreateUserClientPage.js";
import SearchPage from "views/Pages/Retailer/SearchPage.js";
import ProductDetailPage from "views/Pages/Retailer/ProductDetailPage.js";
import OrderPage from "views/Pages/Retailer/OrderPage.js";
import OrderSuccessPage from "views/Pages/Retailer/OrderSuccessPage.js";
import SignUpPage from "views/Pages/SignUpPage.js";
import ItemManagementPage from "views/Pages/Importer/ItemManagementPage";
import OrderManagementPage from "views/Pages/Importer/OrderManagementPage";
import ImporterSettingPage from "views/Pages/Importer/ImporterSettingPage";
import CreateNewItemPage from "views/Pages/Importer/CreateNewItemPage";
import ExportItemPage from "views/Pages/Importer/ExportItemPage";
import PricePolicyPage from "views/Pages/Importer/PricePolicyPage";
import UserManagementPage from "views/Pages/Admin/UserManagement";
import AdminExportItem from "views/Pages/Admin/AdminExportItem";
import SettingTemplate from "views/Pages/Admin/SettingTemplate";
import CreateNewPricePolicy from "views/Pages/Importer/CreateNewPricePolicy";
import CreateNewCampaign from "views/Pages/Importer/CreateNewCampaign";
import CampaignManagement from "views/Pages/Importer/CampaignManagement";
import ViewCampaign from "views/Pages/Importer/ViewCampaign";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

var dashRoutes = [
  // {
  //   collapse: true,
  //   name: "Retailer Section",
  //   rtlName: "صفحات",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/home-page",
  //       name: "Home Page",
  //       rtlName: "لوحة القيادة",
  //       icon: DashboardIcon,
  //       component: HomePage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/product-detail-page",
  //       name: "Product Detail Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: ProductDetailPage,
  //       layout: "/auth"
  //     },
  //     {
  //       path: "/signup-page",
  //       name: "SignUp Page",
  //       rtlName: "عالتسعير",
  //       mini: "PP",
  //       rtlMini: "ع",
  //       component: SignUpPage,
  //       layout: "/auth"
  //     },
  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth",
    role: "all",
    show: false
  },
  {
    path: "/signup-page",
    name: "SignUp Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: SignUpPage,
    layout: "/auth",
    role: "all",
    show: false
  },
  {
    path: "/home-page",
    name: "Home Page",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: HomePage,
    layout: "/auth",
    role: "all",
    show: false
  },
  {
    path: "/product-detail-page",
    name: "Product Detail Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ProductDetailPage,
    layout: "/auth",
    role: "all",
    show: false
  },
  {
    path: "/search-page",
    name: "Search Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: SearchPage,
    layout: "/auth",
    role: "all",
    show: false
  },
  // ADMIN SECTION
  {
    path: "/user-management-page",
    name: "User Management",
    mini: "UM",
    component: UserManagementPage,
    layout: "/admin",
    authenticate: true,
    role: "admin",
    show: true
  },
  {
    path: "/admin-export-item",
    name: "Export",
    mini: "EX",
    component: AdminExportItem,
    layout: "/admin",
    authenticate: true,
    role: "admin",
    show: true
  },
  {
    path: "/admin-setting",
    name: "Template Setting",
    mini: "TS",
    component: SettingTemplate,
    layout: "/admin",
    authenticate: true,
    role: "admin",
    show: true
  },
  {
    path: "/create-user-page",
    name: "Create User",
    mini: "AU",
    component: CreateUserPage,
    layout: "/admin",
    authenticate: true,
    role: "admin",
    show: false
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
  //   role: "retailer",
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
  //   role: "retailer",
  //   show: true
  // },
  {
    path: "/checkout-page",
    name: "Checkout Page",
    rtlName: "عالتسعير",
    mini: "CP",
    rtlMini: "ع",
    component: CheckoutPage,
    layout: "/admin",
    role: "retailer",
    show: true
  },
  {
    path: "/history-page",
    name: "History Page",
    rtlName: "عالتسعير",
    mini: "HP",
    rtlMini: "ع",
    component: HistoryPurchasePage,
    layout: "/admin",
    role: "retailer",
    show: true
  },
  {
    path: "/user-page",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    mini: "UP",
    rtlMini: "شع",
    component: UserProfile,
    layout: "/admin",
    role: "retailer",
    show: false
  },

  /// IMPORTER SECTION
  {
    path: "/item-management-page",
    name: "Item Management",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ItemManagementPage,
    layout: "/admin",
    role: "importer",
    show: true
  },
  {
    path: "/campaign-page",
    name: "Campaign Management",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CampaignManagement,
    layout: "/admin",
    role: "importer",
    show: true
  },
  {
    path: "/price-policy-page",
    name: "Price Policy",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: PricePolicyPage,
    layout: "/admin",
    role: "importer",
    show: true
  },
  {
    path: "/order-management-page",
    name: "Order Management",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: OrderManagementPage,
    layout: "/admin",
    role: "importer",
    show: true
  },

  {
    path: "/importer-setting-page",
    name: "Notification Setting",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ImporterSettingPage,
    layout: "/admin",
    role: "importer",
    show: true
  },
  {
    path: "/signup-page",
    name: "SignUp Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: SignUpPage,
    layout: "/auth",
    role: "importer",
    show: false
  },
  {
    path: "/login-page",
    name: "Login Page",
    rtlName: "هعذاتسجيل الدخول",
    mini: "L",
    rtlMini: "هعذا",
    component: LoginPage,
    layout: "/auth",
    role: "importer",
    show: false
  },
  {
    path: "/user-page",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    mini: "UP",
    rtlMini: "شع",
    component: UserProfile,
    layout: "/admin",
    role: "importer",
    show: false
  },
  {
    path: "/export-item-page",
    name: "Export Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ExportItemPage,
    layout: "/admin",
    role: "importer",
    show: false
  },
  {
    path: "/create-item-page",
    name: "Item Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewItemPage,
    layout: "/admin",
    role: "importer",
    show: false
  },
  {
    path: "/create-campaign-page",
    name: "Create Campaign Page",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewCampaign,
    layout: "/admin",
    role: "importer",
    show: false
  },

  {
    path: "/create-price-policy-page",
    name: "Create Price Policy Setting",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: CreateNewPricePolicy,
    layout: "/admin",
    role: "importer",
    show: false
  },
  {
    path: "/view-campaign",
    name: "Campaign View",
    rtlName: "عالتسعير",
    mini: "PP",
    rtlMini: "ع",
    component: ViewCampaign,
    layout: "/admin",
    role: "importer",
    show: false
  }

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
  //   state: "admin",
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
  //   path: "/create-price-policy-page",
  //   name: "Create Price Policy Setting",
  //   rtlName: "عالتسعير",
  //   mini: "PP",
  //   rtlMini: "ع",
  //   component: CreateNewPricePolicy,
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
