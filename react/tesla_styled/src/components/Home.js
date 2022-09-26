import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="/images/model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        backgroundImg="/images/model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        backgroundImg="/images/model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="/images/model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Accessories"
        backgroundImg="/images/accessories.jpg"
        leftBtn="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
