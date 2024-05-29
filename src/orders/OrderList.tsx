import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

const amountOptions = { style: "currency", currency: "USD" };

export const OrderList = () => (
  <List sort={{ field: "date", order: "DESC" }}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <TextField source="reference" />
      <ReferenceField source="customer_id" reference="customers" />
      <NumberField source="total_ex_taxes" options={amountOptions} />
      <NumberField source="delivery_fees" options={amountOptions} />
      <NumberField source="taxes" options={amountOptions} />
      <NumberField source="total" options={amountOptions} />
      <TextField source="status" />
    </Datagrid>
  </List>
);
