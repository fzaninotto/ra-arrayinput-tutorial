import { Admin, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import products from "./products";
import categories from "./categories";
import customers from "./customers";
import orders from "./orders";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
    <Resource name="categories" {...categories} />
  </Admin>
);
