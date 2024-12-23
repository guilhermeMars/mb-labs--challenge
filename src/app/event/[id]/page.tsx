"use client";

import Image from "next/image";
import styled from "styled-components";
import { use } from "react";
import { useState } from "react";
import { useEventContext } from "@/context/eventContext";

// Styled Components

const EventPageDiv = styled.div`
  background-color: #2d2d2d;
  width: 100%;
  /* Remove later */
  min-height: 100svh;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
`;

const EventTextTitle = styled.div`
  margin: 3rem 0;
`;

const EventTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: hsl(0, 0%, 98%);
`;

const EventAuthor = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: hsl(0, 0%, 70%);
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
`;

const EventTabWrapper = styled.div`
  flex: calc(70% - 2rem);
`;

const EventTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const EventTab = styled.button`
  background-color: hsl(0, 0%, 98%);
  padding: 0.5rem 1rem;
  border: 2px solid #fc04c4;
  border-radius: 5px;
  color: hsl(0, 0%, 5%);
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsl(313, 97%, 80%);
    font-weight: 600;
    padding: 0.5rem 1.5rem;
  }
`;

const EventInformation = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 2px solid hsl(0, 0%, 5%);
  color: hsl(0, 0%, 5%);
  font-weight: 400;
  box-shadow: 0px 5px 10px hsl(0, 0%, 0%, 25%);
`;

const EventMainText = styled.p`
  font-size: 1rem;
  color: hsl(0, 0%, 5%);
`;

const EventLocation = styled.p``;

const EventDate = styled.p``;

const EventBuy = styled.div`
  background-color: #d9d9d9;
  flex: calc(30% - 2rem);
  border-radius: 15px;
  overflow: hidden;
`;

const EventImage = styled.div`
  position: relative;
  width: 455px;
  height: 230px;
  margin-bottom: 1rem;
`;

const EventBuyContent = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EventPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: hsl(0, 0%, 5%);
`;
const EventTickets = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: hsl(0, 0%, 5%);
`;

const EventBuyButton = styled.button`
  background: linear-gradient(
    130deg,
    rgba(240, 115, 20, 1) 0%,
    rgba(252, 4, 196, 1) 100%
  );
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: hsl(0, 0%, 5%);
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsl(313, 97%, 650%);
    font-weight: 600;
    padding: 0.5rem 1.5rem;
  }
`;

export default function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { events } = useEventContext();
  const eventData = events.find((event) => event._id === id);

  const [tab, setTab] = useState<string>("description");

  function handleClickTab(tab: string) {
    setTab(tab);
  }

  return (
    <EventPageDiv>
      <Content>
        <EventTextTitle>
          <EventTitle>{eventData?.name}</EventTitle>
          <EventAuthor>{eventData?.presenter}</EventAuthor>
        </EventTextTitle>
        <EventContent>
          <EventTabWrapper>
            <EventTabs>
              <EventTab onClick={() => handleClickTab("description")}>
                Descrição
              </EventTab>
              <EventTab onClick={() => handleClickTab("local")}>
                Local/Data
              </EventTab>
            </EventTabs>
            <EventInformation>
              {tab === "description" && (
                <EventMainText>{eventData?.description}</EventMainText>
              )}
              {tab === "local" && (
                <EventMainText>
                  <EventLocation>{eventData?.location}</EventLocation>
                  <EventDate>{eventData?.date}</EventDate>
                </EventMainText>
              )}
            </EventInformation>
          </EventTabWrapper>
          <EventBuy>
            <EventImage>
              <Image src={eventData?.image!} alt="Event Cover" fill />
            </EventImage>
            <EventBuyContent>
              <EventPrice>{eventData?.price}</EventPrice>
              <EventTickets>
                Apenas <strong>{eventData?.tickets}</strong> disponíveis
              </EventTickets>
              <EventBuyButton>Comprar</EventBuyButton>
            </EventBuyContent>
          </EventBuy>
        </EventContent>
      </Content>
    </EventPageDiv>
  );
}
