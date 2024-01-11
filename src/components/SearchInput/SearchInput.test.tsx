import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { debounce } from "../../utils/debounce";

describe("debounceSearch", () => {
  jest.useFakeTimers();

  it("should only execute the function after the specified delay", () => {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce(mockFunction, 500);

    for (let i = 0; i < 10; i++) {
      debouncedFunction();
    }

    expect(mockFunction).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});

test("handles rate limit error", async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ status: 403 }));

  render(<SearchInput />);
  const inputElement = screen.getByPlaceholderText(
    "Search users"
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");

  // Fast-forward time to 500ms (debounce)
  jest.runAllTimers();
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

  // Fast-forward time to 500ms (debounce)
  jest.runAllTimers();
  expect(await screen.findByText(/error occurred/i)).toBeInTheDocument();
});
