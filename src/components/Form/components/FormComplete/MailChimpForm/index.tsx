import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetterForm } from "../NewsLetterForm";

export const MailChimpFormContainer = (props: any) => {
  const MAIL_CHIMP_URL =
    "https://keffbr.us14.list-manage.com/subscribe/post?u=ed5da9de447f44d3ebe2fcaf6&amp;id=b1c7d7f33e";

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={MAIL_CHIMP_URL}
        render={({ subscribe, status, message }: any) => (
          <NewsLetterForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};
