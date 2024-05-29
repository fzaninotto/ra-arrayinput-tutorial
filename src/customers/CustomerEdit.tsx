import {
  BooleanField,
  ArrayInput,
  SimpleFormIterator,
  DateField,
  Edit,
  NumberField,
  TabbedForm,
  TextInput,
  SimpleShowLayout,
} from "react-admin";
import { Stack } from "@mui/material";

export const CustomerEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab label="Main">
        <Stack direction="row" gap={1} width="100%">
          <TextInput source="first_name" helperText={false} />
          <TextInput source="last_name" helperText={false} />
        </Stack>
        <TextInput source="email" />
        <ArrayInput source="groups">
          <SimpleFormIterator disableReordering sx={{ width: 300 }}>
            <TextInput source="" hiddenLabel helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="address" helperText={false} />
        <Stack direction="row" gap={1} width="100%">
          <TextInput source="city" helperText={false} />
          <TextInput source="zipcode" helperText={false} />
          <TextInput source="stateAbbr" helperText={false} />
        </Stack>
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Stats">
        <SimpleShowLayout sx={{ p: 0 }}>
          <DateField source="first_seen" />
          <DateField source="last_seen" />
          <BooleanField source="has_ordered" />
          <DateField source="latest_purchase" />
          <BooleanField source="has_newsletter" />
          <NumberField source="nb_orders" />
          <NumberField source="total_spent" />
        </SimpleShowLayout>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
