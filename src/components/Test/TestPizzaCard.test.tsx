import { render, screen } from "@testing-library/react";

import TestPizzaCard from "./TestPizzaCard";

const data = ["Пепперони", "Мясная", "Сырная"];

describe("TestPizzaCard component", () => {
  it("TestPizzaCard renders", () => {
    render(<TestPizzaCard pizzas={data} />);

    expect(screen.getByText("Сырная")).toBeInTheDocument();
  });
});
