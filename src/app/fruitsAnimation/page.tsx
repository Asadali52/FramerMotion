"use client"
import FruitCard from "@/components/cards/FruitCard";
import { food } from "@/utilis/MockData";

const App = () => {

  return food.map(([emoji, hueA, hueB]) => (
    <FruitCard emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
};

export default App;
