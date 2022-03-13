import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Anchor from ".";

describe("<Anchor />", () => {
  it("should render the link", async () => {
    const { container } = renderWithTheme(<Anchor>Keff</Anchor>);
    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
