import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";



test("renders user data correctly using mock data", ()=>{
    const mockuser = {
        name:"Ram",
        email:"ram@gmail.com",
    };

    render(<UserCard user={mockuser} />);

    expect(screen.getByText("Ram")).toBeInTheDocument();
    expect(screen.getByText("ram@gmail.com")).toBeInTheDocument();
});