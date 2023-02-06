import React from "react";

function TestPizzaCard(props: any) {
  const { pizzas = [] } = props;
  if (!pizzas.length) return null;
  return (
    <ul>
      {pizzas.map((el: any) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}

export default TestPizzaCard;
