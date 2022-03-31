import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import AutoCompleteInput from "./AutoCompleteInput";

const setup = (suggestions: string[] = ["chocolate", "strawberry"]) => {
  const utils = render(
    <AutoCompleteInput
      data={suggestions}
      label="test input"
      handleSubmit={() => {}}
    />
  );
  const input: HTMLInputElement = screen.getByLabelText("test input");
  return {
    input,
    ...utils,
  };
};

describe("Test different scenarios when receiving an array of suggestions", () => {
  test("Display a list os suggestions when an input is inserted", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "a" } });
    const suggestionsList = screen.getAllByRole("listitem");
    expect(suggestionsList.length).toBe(2);
  });
  test("Display no suggestions message when input dont match any", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "u" } });
    expect(
      screen.queryByText("No suggestions, you're on your own!")
    ).toBeTruthy();
  });
  test("Store item selected", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "a" } });
    expect(screen.getByRole("presentation")).toBeVisible();
    fireEvent.keyDown(input, { key: "Enter" });
    expect(input.value).toBe("chocolate");
  });
});
