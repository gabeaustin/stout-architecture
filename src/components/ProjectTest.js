import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class ProjectTest extends Component {
  state = {
    items: [
      { id: 1, title: "item no 1" },
      { id: 2, title: "item no 2" },
      { id: 3, title: "item no 3" },
      { id: 4, title: "item no 4" },
      { id: 5, title: "item no 5" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    );
  }
}

export default ProjectTest;
