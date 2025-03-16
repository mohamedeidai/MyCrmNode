import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  tenantId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
