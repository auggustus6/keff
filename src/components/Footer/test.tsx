import "jest-styled-components";
import { screen } from "@testing-library/react";
import Footer from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Button />", () => {
  it("should render the itens menu", () => {
    renderWithTheme(<Footer />);

    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/whatsapp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mail/i)).toBeInTheDocument();
  });
});
