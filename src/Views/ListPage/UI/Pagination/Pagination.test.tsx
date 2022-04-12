import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  test("should not render nav buttons if there's only one page", () => {
    render(<Pagination pages={1} setPage={() => {}}></Pagination>);

    const wrapper = screen.queryByRole("navigation");

    expect(wrapper).toBeFalsy();
  });
  test("should render nav buttons if there's more than one page", () => {
    render(<Pagination pages={2} setPage={() => {}}></Pagination>);

    const wrapper = screen.queryByRole("navigation");

    expect(wrapper).toBeInTheDocument();
  });
  test("should render one button for each page", () => {
    render(<Pagination pages={10} setPage={() => {}}></Pagination>);

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems.length).toBe(10);
  });
});
