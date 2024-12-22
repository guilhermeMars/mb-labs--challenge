"use client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import styled, { css } from "styled-components";

// interface Event {
//   _id: string;
//   name: string;
//   description: string;
//   date: string;
//   location: string;
//   price: string;
//   image: string;
//   tickets: number;
// }

// function getEvents(): Event[] {
//   return Array.from({ length: 10 }, () => ({
//     _id: faker.string.uuid(),
//     name: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     date: faker.date.future().getDay() + "/" + faker.date.future().getMonth(),
//     location: faker.location.city(),
//     price: faker.commerce.price(),
//     image: faker.image.url(),
//     tickets: faker.number.int({ min: 0, max: 100 }),
//   }));
// }

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
  border-radius: 0 0 13px 13px;
  box-shadow: 0px 5px 10px hsl(0, 0%, 15%);
  max-height: 230px;
  width: 100%;
  padding: 0;
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
          <EventCard>
            <EventImage>
              {/* Next Image Component */}
              <Image
                src="/Capa-Gluhwein.webp"
                alt=""
                width={455}
                height={230}
              />
            </EventImage>
            <EventCardInfo>
              <EventCardTitle>TitleLorem 001</EventCardTitle>
              <IconsDiv>
                <IconDiv>
                  <Image
                    src="/Calendar icon.svg"
                    alt=""
                    width={38}
                    height={44}
                  />
                  <IconText>16/08</IconText>
                </IconDiv>
                <IconDiv>
                  <Image src="/User Icon.svg" alt="" width={38} height={38} />
                  <IconText>João Carlos</IconText>
                </IconDiv>
              </IconsDiv>
            </EventCardInfo>
          </EventCard>
          <EventCard>
            <EventImage>
              {/* Next Image Component */}
              <Image
                src="/capa-confraternizacao.webp"
                alt=""
                width={455}
                height={230}
              />
            </EventImage>
            <EventCardInfo>
              <EventCardTitle>TitleLorem 001</EventCardTitle>
              <IconsDiv>
                <IconDiv>
                  <Image
                    src="/Calendar icon.svg"
                    alt=""
                    width={38}
                    height={44}
                  />
                  <IconText>16/08</IconText>
                </IconDiv>
                <IconDiv>
                  <Image src="/User Icon.svg" alt="" width={38} height={38} />
                  <IconText>João Carlos</IconText>
                </IconDiv>
              </IconsDiv>
            </EventCardInfo>
          </EventCard>
          <EventCard>
            <EventImage>
              {/* Next Image Component */}
              <Image
                src="/capa-apresentacao.webp"
                alt=""
                width={455}
                height={230}
              />
            </EventImage>
            <EventCardInfo>
              <EventCardTitle>TitleLorem 001</EventCardTitle>
              <IconsDiv>
                <IconDiv>
                  <Image
                    src="/Calendar icon.svg"
                    alt=""
                    width={38}
                    height={44}
                  />
                  <IconText>16/08</IconText>
                </IconDiv>
                <IconDiv>
                  <Image src="/User Icon.svg" alt="" width={38} height={38} />
                  <IconText>João Carlos</IconText>
                </IconDiv>
              </IconsDiv>
            </EventCardInfo>
          </EventCard>
        </EventDiv>
      </Content>
    </HomePage>
  );
}
