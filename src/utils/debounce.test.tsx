import { debounce } from "./debounce";

describe("debounce", () => {
  jest.useFakeTimers();

  test("should call the function after the specified delay", () => {
    const mockFunction = jest.fn();
    const time = 500;
    const debouncedFunction = debounce(mockFunction, time);

    debouncedFunction();
    expect(mockFunction).not.toHaveBeenCalled();

    // Fast-forward time to just before the delay
    jest.advanceTimersByTime(time - 1);
    expect(mockFunction).not.toHaveBeenCalled();

    // Fast-forward through the remaining time
    jest.advanceTimersByTime(1);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test("should not call the function immediately", () => {
    const mockFunction = jest.fn();
    const time = 500;
    const debouncedFunction = debounce(mockFunction, time);

    debouncedFunction();
    expect(mockFunction).not.toHaveBeenCalled();
  });

  test("should call the function only once when called multiple times quickly", () => {
    const mockFunction = jest.fn();
    const time = 500;
    const debouncedFunction = debounce(mockFunction, time);

    for (let i = 0; i < 5; i++) {
      debouncedFunction();
    }

    jest.advanceTimersByTime(time);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
