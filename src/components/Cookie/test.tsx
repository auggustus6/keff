import { fireEvent, waitFor } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Cookie from ".";

const handleClick = jest.fn();

describe("<Cookie><Cookie/>", () => {
  it("should verify if the component is rendered", () => {
    const { getByTestId } = renderWithTheme(<Cookie />);
    const component = getByTestId("Wrapper");

    expect(component).toBeDefined;
  });

  it("should verify if the redirect link is going home /", () => {
    const { getByRole } = renderWithTheme(<Cookie />);
    const redirect = getByRole("link");

    expect(redirect).toHaveAttribute("href", "/");
  });

  it("should verify if the button function has been called once", async () => {
    const { getByRole } = renderWithTheme(<Cookie />);
    const buttonAction = getByRole("button");
    fireEvent.click(buttonAction);

    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});
