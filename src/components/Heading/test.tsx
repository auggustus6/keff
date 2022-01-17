import "jest-styled-components";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import Heading from ".";

describe("<Heading />", () => {
  it("should render a white heading by default", () => {
    renderWithTheme(<Heading>Lone Wolf</Heading>);
    expect(screen.getByRole("heading", { name: /lone wolf/i })).toHaveStyle({
      color: "#FFF",
    });
  });

  it("should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Lone Wolf</Heading>);
    expect(screen.getByRole("heading", { name: /lone wolf/i })).toHaveStyle({
      color: "#141414",
    });
  });

  it("should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Lone Wolf</Heading>);
    expect(screen.getByRole("heading", { name: /lone wolf/i })).toHaveStyle({
      "font-size": "1.6rem",
    });
  });

  it("should render a heading with a huge size", () => {
    renderWithTheme(<Heading size="huge">Lone Wolf</Heading>);

    expect(screen.getByRole("heading", { name: /lone wolf/i })).toHaveStyle({
      "font-size": "5.2rem",
    });
  });

  it("should render a Heading with a primary line color", () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>,
    );
  });
});
