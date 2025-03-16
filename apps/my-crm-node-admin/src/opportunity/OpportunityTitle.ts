import { Opportunity as TOpportunity } from "../api/opportunity/Opportunity";

export const OPPORTUNITY_TITLE_FIELD = "title";

export const OpportunityTitle = (record: TOpportunity): string => {
  return record.title?.toString() || String(record.id);
};
