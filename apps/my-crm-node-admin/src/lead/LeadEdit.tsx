import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="tenantId" source="tenantId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
