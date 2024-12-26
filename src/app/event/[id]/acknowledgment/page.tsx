"use client";

import styled from "styled-components";
import { Event } from "@/interface/eventInterface";

// Styled Components

const EventPageMain = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  height: 100vh;
  color: hsl(0, 0%, 98%);
  padding: 0 1rem;
`;

const StyledH1 = styled.h1`
  margin-bottom: 0.5rem;
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: bold;
`;

const AnimationColorText = styled.span`
  background: linear-gradient(-45deg, #fc04c4, #f07314);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  border-radius: 2070px;
  color: transparent;
  background-clip: text;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

export default function AcknowledgmentPage() {
  return (
    <EventPageMain>
      <Content>
        <StyledH1>
          Obrigado pela <AnimationColorText>compra</AnimationColorText>!
        </StyledH1>
        <StyledP>Um email foi enviado com os dados do seu ingresso!</StyledP>
      </Content>
    </EventPageMain>
  );
}
