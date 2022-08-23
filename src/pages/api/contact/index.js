import { format } from "date-fns";
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const pipedrive = require("pipedrive");

export default async function (req, res) {
  const { name, email, phone /* project_investment, already_working */ } =
    req.body;

  const defaultClient = pipedrive.ApiClient.instance;
  defaultClient.authentications.api_key.apiKey =
    "e66fb01d9293297eee5aec0ba442b837875888b7";

  // async function addLead() {
  //   try {
  //     console.log('Sending request...');

  //     const api = new pipedrive.LeadsApi();
  //     // const api = new pipedrive.DealsApi();
  //     // const data = {
  //     //   title: `${name}, ${already_working}, ${email}, ${phone}`,
  //     //   value: 500,
  //     //   currency: 'BRL',
  //     //   user_id: null,
  //     //   person_id: 1,
  //     //   // org_id: 1,
  //     //   // stage_id: 1,
  //     //   status: 'open',
  //     //   // expected_close_date: '2022-02-11',
  //     //   // probability: 60,
  //     //   // lost_reason: null,
  //     //   visible_to: 1,
  //     //   // add_time: '2021-02-11',
  //     // };
  //     const dataPerson = {
  //       ece759f640108d8cb2ed96a6fc7daee02da64032: name,
  //       ca9f829d8ec188b09cdda266b69b259a80bb5625: email,
  //       e4fb16bf7cab7c008ff1b703b5b604ba4ad376f9: phone,
  //       ba6544cef806ab6a976bc0f96d868eb25f6a0cd3: project_investment,
  //       fabdca9f9fdfe669cc0940fa624f6b8f975ed545: already_working,
  //       title: `${name}, trabalha com encapsulados? ${already_working}`,
  //       person_id: 1,
  //     };

  //     const responsePerson = await api.addLead(dataPerson).then(
  //       (data) => {
  //         console.log('API called successfully. Returned data: ' + data);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );

  //     // console.log('Deal was added successfully!', response);
  //     console.log('Deal was added successfully!', responsePerson);
  //   } catch (err) {
  //     const errorToLog = err.context?.body || err;

  //     console.log('Adding failed', errorToLog);
  //   }
  // }

  // addLead();

  async function addDeal() {
    try {
      console.log("Sending request...");
      const api = new pipedrive.DealsApi();

      const data = {
        // title: `${name}, já trabalha? ${already_working}`,
        title: `lead`,
        dcb4d2a7b4c0aa2c6f99cd47af7b028748042f56: name,
        a840bea0b18fdfa57161ffc9491ab4efa8767a71: email,
        e3bb10383fdbf0cd655d2cfb5c05630db0898486: phone,
        // ba21084c88174ceeadde823ab08614cd9f36c03e: project_investment,
        // d5368f56b3a4bff1c9a193bb6164b1880b56d67d: already_working,
        // value: project_investment,
        value: 0,
        currency: "BRL",
        user_id: 16163705,
        status: "open",
        visible_to: 1,
        add_time: format(new Date(), "dd/MM/yyyy"),
      };
      const response = await api.addDeal(data);

      console.log("Deal was added successfully!", response);
    } catch (err) {
      const errorToLog = err.context?.body || err;
      console.log("Adding failed", errorToLog);
    }
  }

  addDeal();

  res.status(200).json({ message: "Status: 200" });
}
