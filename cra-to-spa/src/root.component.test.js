import { render } from "@testing-library/react";
import Root from "./App";
import React from "react";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Hi/i)).toBeInTheDocument();
  });
});
