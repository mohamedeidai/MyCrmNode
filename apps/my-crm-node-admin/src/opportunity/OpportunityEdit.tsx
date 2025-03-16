import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OpportunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="estimatedValue" source="estimatedValue" />
        <TextInput label="tenantId" source="tenantId" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
