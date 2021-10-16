import React from "react";
import styled from "styled-components";

const Notification = () => {
  return (
    <Container>
      <Text>Notification</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;

export default Notification;
