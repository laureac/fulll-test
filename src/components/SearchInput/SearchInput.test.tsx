import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

test("handles rate limit error", async () => {
  global.fetch = jest.fn().mockResolvedValue({ status: 403 });

  render(<SearchInput />);
  const inputElement = screen.getByPlaceholderText(
    "Search users"
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");

  expect(await screen.findByText(/rate limit exceeded/i)).toBeInTheDocument();
});

test("handles generic error", async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.reject(new Error("error")));

  render(<SearchInput />);
  const inputElement = screen.getByPlaceholderText(
    "Search users"
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");

  expect(await screen.findByText(/error occurred/i)).toBeInTheDocument();
});
