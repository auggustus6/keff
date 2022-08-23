import { format } from "date-fns";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const pipedrive = require("pipedrive");

export default async function (req, res) {
  const { name, email, phone } = req.body;

  const defaultClient = pipedrive.ApiClient.instance;
  defaultClient.authentications.api_key.apiKey =
    "e66fb01d9293297eee5aec0ba442b837875888b7";

  async function addDeal() {
    try {
      console.log("Sending request...");
      const api = new pipedrive.DealsApi();

      const data = {
        title: `lead`,
        dcb4d2a7b4c0aa2c6f99cd47af7b028748042f56: name,
        a840bea0b18fdfa57161ffc9491ab4efa8767a71: email,
        e3bb10383fdbf0cd655d2cfb5c05630db0898486: phone,
        value: 0,
        currency: "BRL",
        user_id: 16163705,
        status: "open",
        visible_to: 1,
        add_time: format(new Date(), "dd/MM/yyyy"),
      };
      await api.addDeal(data);
    } catch (err) {
      const errorToLog = err.context?.body || err;
      console.log("Adding failed", errorToLog);
    }
  }

  await addDeal();

  res.status(200).json({ message: "Status: 200" });
}
