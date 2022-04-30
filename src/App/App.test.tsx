import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppProvider } from "../Context/context";
import App from "./App";

const setup = (route: string = "/") => {
  render(
    <AppProvider>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    </AppProvider>
  );
};

describe("full app rendering/navigating", () => {
  test("render home page", () => {
    setup();

    expect(
      screen.getByText(/everything about your favourite drink/i)
    ).toBeInTheDocument();
  });
  test("user insert input and navigate to results page", () => {
    setup();

    //insert pina on name input
    const nameInput = screen.getByTestId("home-input-name");
    fireEvent.change(nameInput, { target: { value: "pina" } });
    //click search button
    fireEvent.click(screen.getByTestId(/search-button/i));
    //results page rendered
    expect(screen.getByText(/drinks list/i)).toBeInTheDocument();
  });
  test("from product list navigate to product page when selecting a product and go back when pressing back to results", async () => {
    setup("/list?type=name&name=pina");

    //select all aproducts in the list and click on the first one
    const wrapper = await screen.findByTestId("item-list-wrapper");
    const drinks = wrapper.querySelectorAll("li > a");
    fireEvent.click(drinks[0]);

    //product page rendered
    const ingredientsHeader = await screen.findByText(/ingredients/i);
    expect(ingredientsHeader).toBeInTheDocument();

    //select back to results button
    const button = await screen.findByText(/back to results/i);
    fireEvent.click(button);

    //render results page
    expect(await screen.findByText(/drinks list/i)).toBeInTheDocument();
  });

  test("go back to home when clicking on nav logo", async () => {
    setup("/list?type=name&name=pina");

    const logo = screen.getByTestId("home-link");
    fireEvent.click(logo);

    expect(await screen.findByText(/everything about your favourite drink/i));
  });

  test("landing on a not found profuct page", async () => {
    setup("/drink?id=9999999");

    const notFound = await screen.findByText(/no matching drink was found/i);

    expect(notFound).toBeInTheDocument();
  });

  test("landing on a bad page", async () => {
    setup("/nxnxn");

    expect(screen.getByText(/found a page that/i));
  });
});
