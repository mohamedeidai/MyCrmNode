import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OpportunityWhereInput = {
  description?: StringNullableFilter;
  estimatedValue?: FloatNullableFilter;
  id?: StringFilter;
  tenantId?: StringNullableFilter;
  title?: StringNullableFilter;
};
