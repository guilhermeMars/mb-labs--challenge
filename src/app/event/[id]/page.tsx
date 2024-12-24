"use client";

import styled from "styled-components";
import { use, useEffect } from "react";
import { useState } from "react";
import BuyEventSideCard from "@/components/BuyEventSideCard";
import { Event } from "@/interface/eventInterface";

// Styled Components

const EventPageMain = styled.div`
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
  width: 80%;
`;

const EventTabWrapper = styled.div`
  flex: calc(70% - 2rem);
  width: 100%;
  height: 100%;

  @media (max-width: 1250px) {
    flex: calc(60% - 2rem);
  }
`;

const EventTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const EventTab = styled.button<{ $active?: boolean }>`
  font-family: "Inter", sans-serif;
  background-color: ${(props) =>
    props.$active ? "#fc04c4" : "hsl(0, 0%, 98%)"};
  padding: 0.5rem 1rem;
  border: 2px solid #fc04c4;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${(props) => (props.$active ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 5%)")};
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  transition: all 0.4s ease;

  &:hover {
    background-color: hsl(313, 97%, 80%);
    padding: 0.5rem 1.2rem;
    cursor: pointer;
  }
`;

const EventInformation = styled.div`
  background-color: hsl(0, 0%, 98%);
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 1px solid rgba(252, 4, 196, 1);
  color: hsl(0, 0%, 5%);
  font-weight: 400;
  box-shadow: 0px 5px 10px hsl(0, 0%, 0%, 25%);
  width: 100%;
  height: 100%;
`;

const EventMainText = styled.div`
  font-size: 1rem;
  color: hsl(0, 0%, 5%);
`;

const EventLocation = styled.p``;

const EventDate = styled.p``;

export default function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<Event>();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/events?_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setEventData(data[0]);
        console.log("Data:");
        console.log(data);
        console.log("Event Data:");
        console.log(eventData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [tab, setTab] = useState<string>("description");

  function handleClickTab(tab: string) {
    setTab(tab);
  }

  return (
    <EventPageMain>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Content>
          <EventTextTitle>
            <EventTitle>{eventData?.name}</EventTitle>
            <EventAuthor>{eventData?.presenter}</EventAuthor>
          </EventTextTitle>
          <EventContent>
            <EventTabWrapper>
              <EventTabs>
                <EventTab
                  onClick={() => handleClickTab("description")}
                  $active={tab === "description"}
                >
                  Descrição
                </EventTab>
                <EventTab
                  onClick={() => handleClickTab("local")}
                  $active={tab === "local"}
                >
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
            <BuyEventSideCard
              eventDatas={eventData!}
              targetLink={`/event/${id}/buy`}
              buyText="Comprar ingresso"
            />
          </EventContent>
        </Content>
      )}
    </EventPageMain>
  );
}
