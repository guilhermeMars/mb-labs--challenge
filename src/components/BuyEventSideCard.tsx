import styled from "styled-components";
import Image from "next/image";
import { Event } from "@/interface/eventInterface";
import Link from "next/link";

interface BuyEventSideCardProps {
  eventDatas: Event;
  targetLink?: string;
  buyText?: string;
  btnEnable?: boolean;
  buttonOnClick?: () => void;
}

// Styled Components
const EventBuy = styled.div`
  background-color: #d9d9d9;
  flex: calc(30% - 2rem);
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
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
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  @media (max-width: 600px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
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

const EventBuyButton = styled.button<{ $btnEnable?: boolean }>`
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
  filter: ${(props) =>
    props.$btnEnable ? "brightness(90%)" : "grayscale(40%)"};

  // Add hover effect
  ${({ $btnEnable }) =>
    $btnEnable &&
    `
      &:hover {
        filter: brightness(100%);
        padding: 0.5rem 1.5rem;
        cursor: pointer;
      }
    `}
`;
export default function BuyEventSideCard({
  eventDatas,
  targetLink,
  buyText,
  btnEnable = true,
  buttonOnClick,
}: BuyEventSideCardProps) {
  const conditionalProps =
    btnEnable !== undefined && btnEnable === false
      ? {
          className: "disabled",
          "aria-disabled": true,
          tabIndex: -1,
        }
      : {};

  return (
    <EventBuy>
      <EventImage>
        <Image
          src={eventDatas?.image || "/eventCover/default-cover.webp"}
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
        {targetLink ? (
          <Link href={btnEnable ? targetLink : "#"} {...conditionalProps}>
            <EventBuyButton $btnEnable={btnEnable}>{buyText}</EventBuyButton>
          </Link>
        ) : buttonOnClick !== undefined ? (
          <EventBuyButton
            onClick={buttonOnClick}
            $btnEnable={btnEnable}
            disabled={!btnEnable}
          >
            {buyText}
          </EventBuyButton>
        ) : null}
      </EventBuyContent>
    </EventBuy>
  );
}
