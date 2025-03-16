import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OpportunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="estimatedValue" source="estimatedValue" />
        <TextInput label="tenantId" source="tenantId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
