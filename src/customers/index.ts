import PersonIcon from "@mui/icons-material/Person";
import { CustomerList } from "./CustomerList";
import type { Customer } from "../types";
import { CustomerEdit } from "./CustomerEdit";

export default {
  list: CustomerList,
  edit: CustomerEdit,
  icon: PersonIcon,
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
};
