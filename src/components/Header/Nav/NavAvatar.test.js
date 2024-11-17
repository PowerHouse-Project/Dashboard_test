import React from "react";
import { render, screen } from "@testing-library/react";
import NavAvatar from "./NavAvatar";
import { profileImg } from "../../../assets/exports";

describe("NavAvatar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<NavAvatar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct profile image", () => {
    render(<NavAvatar />);
    const img = screen.getByAltText("Profile");
    expect(img).toHaveAttribute("src", profileImg);
  });

  it("displays the correct user name and role", () => {
    render(<NavAvatar />);
    expect(screen.getByText("Aditya")).toBeInTheDocument();
    expect(screen.getByText("Super User")).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    render(<NavAvatar />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0]).toHaveClass("nav-item");
    expect(screen.getByRole("list")).toHaveClass("dropdown-menu");
  });
});
