import {
  TextField,
  ArrayInput,
  DateField,
  Edit,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  SimpleShowLayout,
  SimpleFormIterator,
  AutocompleteInput,
} from "react-admin";
import { Stack, InputAdornment } from "@mui/material";

const NumberInputProps = {
  startAdornment: <InputAdornment position="start">€</InputAdornment>,
};

export const OrderEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 800 }}>
      <SimpleShowLayout direction="row" gap={2} sx={{ px: 0, pt: 0, pb: 2 }}>
        <TextField source="reference" />
        <DateField source="date" />
        <ReferenceField source="customer_id" reference="customers" />
      </SimpleShowLayout>
      <Stack direction="row" gap={1}>
        <NumberInput source="total_ex_taxes" InputProps={NumberInputProps} />
        <NumberInput source="delivery_fees" InputProps={NumberInputProps} />
        <NumberInput source="tax_rate" InputProps={NumberInputProps} />
        <NumberInput source="taxes" InputProps={NumberInputProps} />
        <NumberInput source="total" InputProps={NumberInputProps} />
      </Stack>
      <ArrayInput source="basket">
        <SimpleFormIterator
          disableReordering
          inline
          getItemLabel={(index) => `#${index + 1}`}
        >
          <ReferenceInput source="product_id" reference="products">
            <AutocompleteInput helperText={false} />
          </ReferenceInput>
          <NumberInput source="quantity" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
