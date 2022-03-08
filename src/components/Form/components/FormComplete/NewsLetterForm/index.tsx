import { useState } from "react";

type NewsLetterFormType = {
  status: any;
  message: string;
  onValidated: any;
};

export const NewsLetterForm = ({
  status,
  message,
  onValidated,
}: NewsLetterFormType) => {
  const [fName, setFName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [phone, setPhone] = useState<string | undefined>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fName &&
      email &&
      phone &&
      email.indexOf("@") > -1 &&
      onValidated({
        FNAME: fName,
        EMAIL: email,
        PHONE: phone,
      });
  };

  // const getMessage = (message) => {
  //   if (!message) {
  //     return null;
  //   }
  //   const result = message?.split("-") ?? null;
  //   if ("0" !== result?.[0]?.trim()) {
  //     return decode(message);
  //   }
  //   const formattedMessage = result?.[1]?.trim() ?? null;
  //   return formattedMessage ? decode(formattedMessage) : null;
  // };

  return (
    <div id="mc_embed_signup">
      <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        <div id="mc_embed_signup_scroll">
          <h2>Preencha abaixo para ser atendido!</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">Nome </label>
            <input
              onChange={(e) => setFName(e.target.value)}
              type="text"
              value={fName}
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              E-mail <span className="asterisk">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-PHONE">Celular </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              name="PHONE"
              className=""
              value={phone}
              id="mce-PHONE"
            />
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Voce trabalha com encapasulado?{" "}
              <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              // value=""
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
          </div>

          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_ed5da9de447f44d3ebe2fcaf6_b1c7d7f33e"
              value=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Enviar"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
