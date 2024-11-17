import React from "react";
import { render, screen } from "@testing-library/react";
import NavMessage from "./NavMessage";
import { messages1 } from "../../../assets/exports";

describe("NavMessage", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<NavMessage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct number of messages", () => {
    render(<NavMessage />);
    expect(screen.getByText("You have 3 new messages")).toBeInTheDocument();
  });

  it("contains the correct message item", () => {
    render(<NavMessage />);
    const img = screen.getByAltText("Maria");
    expect(img).toHaveAttribute("src", messages1);
  });

  it("has the correct class names", () => {
    render(<NavMessage />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0]).toHaveClass("nav-item");
    expect(screen.getByRole("list")).toHaveClass("dropdown-menu");
  });
});
