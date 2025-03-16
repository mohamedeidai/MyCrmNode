import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  tenantId?: StringNullableFilter;
  title?: StringNullableFilter;
};
