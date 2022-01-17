import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Error404 from ".";

describe("<Error404 />", () => {
  it("should check if have the image", () => {
    renderWithTheme(<Error404 />);
    expect(screen.getByRole("img")).toBeDefined();
  });

  it("should check if the button exist", () => {
    renderWithTheme(<Error404 />);
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("should check the button redirect", () => {
    const { getByRole } = renderWithTheme(<Error404 />);
    const button = getByRole("link");

    expect(button).toHaveAttribute("href", "/");
  });

  it("should check de background-color", () => {
    const { getByTestId } = renderWithTheme(<Error404 />);
    const wrapper = getByTestId("Wrapper");

    expect(wrapper).toHaveStyleRule("background-color", "#0FAEEB");
  });
});
