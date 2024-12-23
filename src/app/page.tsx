"use client";
import { useEffect, useState } from "react";
import { useEventContext } from "@/context/eventContext";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

// Styled Components

const HomePage = styled.div`
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

const LogoImage = styled.div`
  max-width: 300px;
`;

const TextDiv = styled.div`
  margin: 4rem 0%;
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
  border-radius: 0 0 13px 13px;
  overflow: hidden;
  box-shadow: 0px 5px 10px hsl(0, 0%, 0%, 25%);
  width: 455px;
  height: 230px;
  margin-bottom: 1.5rem;
`;

const EventCardInfo = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const IconText = styled.p`
  color: #141414;
  font-size: 1.4rem;
  font-weight: 500;
`;

export default function Home() {
  const { events } = useEventContext();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true);
  //     const data = await new Promise<Event[]>((resolve) => {
  //       setTimeout(() => {
  //         resolve(getEvents()), 1000;
  //       });
  //     });
  //     setEvents(data);
  //     setLoading(false);
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <HomePage>
      <Content>
        <LogoImage>
          {/* <Image src={null} alt="MbLabs Logo" width={0} height={0} /> */}
        </LogoImage>
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
                    <Image src={event.image} alt={event.name + " Image"} fill />
                  </EventImage>
                  <EventCardInfo>
                    <EventCardTitle>{event.name}</EventCardTitle>
                    <IconsDiv>
                      <IconDiv>
                        <Image
                          src="/Calendar icon.svg"
                          alt=""
                          width={38}
                          height={44}
                        />
                        <IconText>{event.date}</IconText>
                      </IconDiv>
                      <IconDiv>
                        <Image
                          src="/User Icon.svg"
                          alt=""
                          width={38}
                          height={38}
                        />
                        <IconText>{event.presenter}</IconText>
                      </IconDiv>
                    </IconsDiv>
                  </EventCardInfo>
                </EventCard>
              </Link>
            ))
          )}
        </EventDiv>
      </Content>
    </HomePage>
  );
}
