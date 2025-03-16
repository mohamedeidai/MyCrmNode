import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "title";

export const LeadTitle = (record: TLead): string => {
  return record.title?.toString() || String(record.id);
};
