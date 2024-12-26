"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Event } from "@/interface/eventInterface";

// Styled Components

const HomePage = styled.div`
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
`;

const TextDiv = styled.div`
  margin: 4rem 0;
`;

const EventTitle = styled.h1<{ $primary?: boolean }>`
  padding: 0 2rem;
  font-size: ${(props) =>
    props.$primary ? "clamp(3.2rem, 1.5rem + 6vw, 8rem)" : "2rem"};
  font-weight: ${(props) => (props.$primary ? "600" : "300")};
  color: ${(props) => (props.$primary ? "#fff" : "#F2F2F2")};

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;

const GradientText = styled.span`
  background-image: linear-gradient(
    90deg,
    rgba(240, 115, 20, 1) 0%,
    rgba(252, 4, 196, 1) 100%
  );
  color: transparent;
  background-clip: text;
`;

const EventDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  flex: calc(33.33% - 3rem);
  flex-wrap: wrap;
  padding: 0 1.5rem;
`;

const EventCard = styled.div`
  background-color: #d9d9d9;
  border-radius: 13px;
  overflow: hidden;
  min-width: 320px;
  max-width: 400px;
  box-shadow: 0px 5px 10px hsl(0, 0%, 0%, 25%);
`;

const EventImage = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0 0 13px 13px;
  overflow: hidden;
  box-shadow: 0px 5px 10px hsl(0, 0%, 0%, 25%);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const EventCardInfo = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`;

const EventCardTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  color: #141414;
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

const IconText = styled.p`
  color: hsl(0, 0%, 27%);
  font-size: 1.1rem;
  font-weight: 500;
`;

const LogoImage = styled.div`
  position: relative;
  max-width: 150px;
  margin: 4rem 0 2rem 0;
`;

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setEvents(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <HomePage>
      <Content>
        <TextDiv>
          <EventTitle $primary>
            Encontre seu <GradientText>evento</GradientText>!
          </EventTitle>
          <EventTitle>E pavimente seu futuro educacional</EventTitle>
        </TextDiv>
        <EventDiv>
          {loading ? (
            <div>Loading...</div>
          ) : (
            events.map((event) => (
              <Link href={`/event/${event._id}`} passHref key={event._id}>
                <EventCard>
                  <EventImage>
                    {/* Next Image Component */}
                    <Image
                      src={event.image}
                      alt={event.name + " Image"}
                      width="455"
                      height="230"
                      layout="responsive"
                    />
                  </EventImage>
                  <EventCardInfo>
                    <EventCardTitle>{event.name}</EventCardTitle>
                    <IconsDiv>
                      <IconDiv>
                        <IconImageDiv>
                          <Image
                            src="/Calendar icon.svg"
                            alt=""
                            width={38}
                            height={44}
                            layout="responsive"
                          />
                        </IconImageDiv>
                        <IconText>{event.date}</IconText>
                      </IconDiv>
                      <IconDiv>
                        <IconImageDiv>
                          <Image
                            src="/User Icon.svg"
                            alt=""
                            width={38}
                            height={38}
                            layout="responsive"
                          />
                        </IconImageDiv>
                        <IconText>{event.presenter}</IconText>
                      </IconDiv>
                    </IconsDiv>
                  </EventCardInfo>
                </EventCard>
              </Link>
            ))
          )}
        </EventDiv>
        <LogoImage>
          <Image
            src={"/mb-logo.webp"}
            alt="MbLabs Logo"
            width={364}
            height={171}
            layout="responsive"
          />
        </LogoImage>
      </Content>
    </HomePage>
  );
}
