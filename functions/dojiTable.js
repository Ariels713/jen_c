require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const table = base.table("doji");

exports.handler = async (event) => {
  const records = await table.select({}).firstPage();
  const formattedData = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return {
    statusCode: 200,
    body: JSON.stringify(formattedData),
  };
};
