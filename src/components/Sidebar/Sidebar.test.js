import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import Logo from "../Header/Logo";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct menu items", () => {
    render(<Sidebar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Devices")).toBeInTheDocument();
  });

  it("has the correct class names", () => {
    render(<Sidebar />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveClass("sidebar");
    const navList = screen.getByRole("list");
    expect(navList).toHaveClass("sidebar-nav");
  });

  it("toggles the sidebar visibility when the toggle button is clicked", () => {
    const { container } = render(
      <>
        <Logo />
        <Sidebar />
      </>
    );

    const toggleButton = container.querySelector(".toggle-sidebar-btn");
    fireEvent.click(toggleButton);

    expect(document.body.classList.contains("toggle-sidebar")).toBe(true);

    fireEvent.click(toggleButton);

    expect(document.body.classList.contains("toggle-sidebar")).toBe(false);
  });
});
