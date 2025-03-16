import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OpportunityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Opportunities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="estimatedValue" source="estimatedValue" />
        <TextField label="ID" source="id" />
        <TextField label="tenantId" source="tenantId" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
