import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Logo from ".";

describe("<Logo />", () => {
  it("should render a image default", () => {
    renderWithTheme(<Logo url="img/logo.png" />);
    expect(screen.getByLabelText(/keff/i)).toHaveAttribute(
      "src",
      "img/logo.png",
    );
  });

  it("should render a normal logo when size is default", () => {
    renderWithTheme(<Logo url="img/logo.png" />);
    expect(screen.getByLabelText(/keff/i)).toHaveStyle({
      width: "7rem",
    });
  });

  it("should render a logo if mobile", () => {
    renderWithTheme(<Logo url="img/logo.png" />);
    expect(screen.getByLabelText(/keff/i)).toHaveStyleRule("width", "5rem", {
      media: "(max-width: 768px)",
    });
  });
});
