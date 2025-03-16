import { SortOrder } from "../../util/SortOrder";

export type OpportunityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  estimatedValue?: SortOrder;
  id?: SortOrder;
  tenantId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
