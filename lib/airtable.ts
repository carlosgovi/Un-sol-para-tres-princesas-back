import Airtable from "airtable";
const airtableBase = new Airtable({
  apiKey: process.env.AIRTABLE_KEY,
}).base("appZ82mEmCaW74kpN");
export { airtableBase };
