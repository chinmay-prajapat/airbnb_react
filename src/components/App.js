import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";
import data from "../Data/data";
import Card2 from "./Card2";
const App = () => {
  const cardData = data.map((i) => (
    <Card2
      key={i.id}
      title={i.title}
      description={i.description}
      price={i.price}
      stats={i.stats}
      location={i.location}
      openSpots={i.openSpots}
      id={i.id}
    />
  ));
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card-data"> {cardData}</section>
      {/* <Card
        img="
      https://source.unsplash.com/collection/27"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Random "
        price={136}
      /> */}
    </div>
  );
};

export default App;
