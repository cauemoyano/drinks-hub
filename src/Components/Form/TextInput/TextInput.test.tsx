import { fireEvent, render, screen } from "@testing-library/react";

import TextInput from "./TextInput";

test("input changes value on type change", () => {
  render(
    <TextInput
      id="test-text-input"
      label="Text Input"
      handleSubmit={() => {}}
    />
  );
  const input: HTMLInputElement = screen.getByLabelText("Text Input");
  fireEvent.change(input, { target: { value: "Corona" } });
  expect(input.value).toBe("Corona");
});
