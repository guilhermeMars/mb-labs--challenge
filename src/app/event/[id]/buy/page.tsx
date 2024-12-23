"use client";

import styled from "styled-components";
import { use } from "react";
import { useState } from "react";
import { useEventContext } from "@/context/eventContext";
import BuyEventSideCard from "@/components/BuyEventSideCard";
import PersonalData from "@/components/PersonalData";

// Styled Components

const BuyPageMain = styled.div`
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

const BuyTitle = styled.h1`
  margin: 3rem 0;
  font-size: 3rem;
  font-weight: 600;
  color: hsl(0, 0%, 98%);
  text-align: center;
`;

const BuyContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  width: 80%;
`;

const BuyInfos = styled.div`
  flex: calc(70% - 2rem);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1250px) {
    flex: calc(60% - 2rem);
  }
`;

const BuyInfo = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  max-height: 2.8rem;
  overflow: hidden;
  transition: all 1.5s cubic-bezier(0.15, 0.29, 0.18, 1);
  cursor: pointer;

  &:hover {
    max-height: 20rem;
  }
`;

const BuyInfoHeader = styled.h2`
  background-color: hsl(0, 0%, 70%);
  color: hsl(0, 0%, 30%);
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
`;

const BuyInfoFormPersonalData = styled.p`
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export default function BuyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { events } = useEventContext();
  const eventData = events.find((event) => event._id === id);

  const [tab, setTab] = useState<string>("personalData");

  return (
    <BuyPageMain>
      <Content>
        <BuyTitle>Compra de {eventData?.name}</BuyTitle>
        <BuyContent>
          <BuyInfos>
            <BuyInfo
              style={{
                maxHeight: tab === "personalData" ? "20rem" : "2.8rem",
              }}
              onClick={() => setTab("personalData")}
            >
              <BuyInfoHeader>Dados Pessoais</BuyInfoHeader>
              <BuyInfoFormPersonalData>
                <PersonalData />
              </BuyInfoFormPersonalData>
            </BuyInfo>
            <BuyInfo
              style={{
                maxHeight: tab === "paymentData" ? "20rem" : "2.8rem",
              }}
              onClick={() => setTab("paymentData")}
            >
              <BuyInfoHeader>Pagamento</BuyInfoHeader>
              <BuyInfoFormPersonalData>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ipsum omnis sunt nam reprehenderit voluptate natus
                similique minima non, pariatur, dolore, ullam dolorum dicta!
                Nostrum, nobis. Provident perferendis eius ullam!
              </BuyInfoFormPersonalData>
            </BuyInfo>
          </BuyInfos>
          <BuyEventSideCard
            eventDatas={eventData!}
            targetLink="#"
            buyText="Finalizar compra"
          />
        </BuyContent>
      </Content>
    </BuyPageMain>
  );
}
