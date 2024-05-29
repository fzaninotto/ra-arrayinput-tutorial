import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="reference" />
      <ReferenceInput
        source="category_id"
        reference="categories"
        sort={{ field: "name", order: "ASC" }}
      />
      <TextInput source="thumbnail" fullWidth />
      <NumberInput source="price" />
      <TextInput source="description" fullWidth multiline />
      <NumberInput source="width" />
      <NumberInput source="height" />
      <NumberInput source="stock" />
    </SimpleForm>
  </Create>
);
