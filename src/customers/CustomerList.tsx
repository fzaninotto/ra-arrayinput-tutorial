import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="city" />
      <TextField source="stateAbbr" label="State" />
      <NumberField source="nb_orders" />
      <NumberField source="total_spent" />
      <DateField source="last_seen" />
      <DateField source="latest_purchase" />
    </Datagrid>
  </List>
);
