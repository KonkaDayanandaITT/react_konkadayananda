import "@testing-library/jest-dom/vitest";
import {render, screen, fireEvent, cleanup} from "@testing-library/react";
import Counter from "./counter";
import {afterEach, test, expect} from "vitest";
afterEach(()=>{
    cleanup();
});

test("increment counter when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByText("Increment");
    fireEvent.click(button);

    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("1");
});

test("counter starts at 0", ()=>{
    render(<Counter />);
    expect(screen.getByTestId("count").textContent).toBe("0");
});

test("decrement counter when button is clicked", ()=>{
    render(<Counter />);
    const button = screen.getByText("Decrement");
    fireEvent.click(button);

    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("-1");
})

test("increment multiple times", ()=>{
    render(<Counter />);

    const button = screen.getByText("Increment");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(screen.getByTestId("count").textContent).toBe("3");
});

