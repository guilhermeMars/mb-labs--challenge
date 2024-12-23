import styled from "styled-components";
import Image from "next/image";
import { Event } from "@/mock/eventData";
import Link from "next/link";

interface BuyEventSideCardProps {
  eventDatas: Event;
  targetLink?: string;
  buyText?: string;
}

// Styled Components
const EventBuy = styled.div`
  background-color: #d9d9d9;
  flex: calc(30% - 2rem);
  border-radius: 15px;
  overflow: hidden;
  min-width: 300px;

  @media (max-width: 1250px) {
    flex: calc(40% - 2rem);
  }
`;

const EventImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: 937px) {
    position: relative;
    width: 100%;
  }
`;

const EventBuyContent = styled.div`
  margin: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const EventBuyTitle = styled.h4`
  font-size: 1.9rem;
  font-weight: 700;
  color: hsl(0, 0%, 5%);
`;

const EventPrice = styled.p`
  font-size: 2rem;
  font-weight: 400;
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
  margin-top: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: hsl(0, 0%, 98%);
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    font-weight: 600;
    padding: 0.5rem 1.5rem;
  }
`;
export default function BuyEventSideCard({
  eventDatas,
  targetLink,
  buyText,
}: BuyEventSideCardProps) {
  return (
    <EventBuy>
      <EventImage>
        <Image
          src={eventDatas?.image!}
          alt="Event Cover"
          width="455"
          height="230"
          layout="responsive"
        />
      </EventImage>
      <EventBuyContent>
        <EventBuyTitle>{eventDatas?.name}</EventBuyTitle>
        <EventPrice>R$ {eventDatas?.price}</EventPrice>
        <EventTickets>
          Apenas <strong>{eventDatas?.tickets}</strong> disponíveis
        </EventTickets>
        {targetLink && (
          <Link href={targetLink}>
            <EventBuyButton>{buyText}</EventBuyButton>
          </Link>
        )}
      </EventBuyContent>
    </EventBuy>
  );
}