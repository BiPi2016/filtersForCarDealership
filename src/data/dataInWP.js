const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://cars.amp-dev.se/",
  consumerKey: "ck_654be714ee3c9310f882d465cd2d7c0a241e6690",
  consumerSecret: "cs_b441d22e822ff7864684e52f3aae10f011e6f2c9",
  version: "wc/v3",
  queryStringAuth: true
});

export default WooCommerce;

 