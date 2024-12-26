"use client";

import styled from "styled-components";
import { use, useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { Event } from "@/interface/eventInterface";
import BuyEventSideCard from "@/components/BuyEventSideCard";
import PersonalData from "@/components/PersonalData";
import PaymentData from "@/components/PaymentData";

// Styled Components

const BuyPageMain = styled.div`
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
`;

const BuyInfoHeader = styled.h2`
  background-color: hsl(0, 0%, 70%);
  color: hsl(0, 0%, 30%);
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
`;

const BuyInfoFormPersonalData = styled.div`
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export default function BuyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<Event>();
  useEffect(() => {
    setLoading(true);
    fetch(`/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setEventData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [isFormValid, setIsFormValid] = useState<boolean[]>([false, false]);
  const [tab, setTab] = useState<number>(0);
  const isAllValid = isFormValid.every((status) => status);

  function handleFormSubmit(index?: number) {
    if (index || index === 0) {
      setIsFormValid((prev) => {
        const newStatus = [...prev];
        newStatus[index] = true;
        return newStatus;
      });
    }
    setTab(tab + 1);
  }

  return (
    <BuyPageMain>
      <Content>
        <BuyTitle>Compra de {eventData?.name}</BuyTitle>
        <BuyContent>
          <BuyInfos>
            <BuyInfo
              style={{
                maxHeight: tab === 0 ? "37rem" : "2.8rem",
              }}
              onClick={() => setTab(0)}
            >
              <BuyInfoHeader>Dados Pessoais</BuyInfoHeader>
              <BuyInfoFormPersonalData>
                <PersonalData index={0} onSubmit={handleFormSubmit} />
              </BuyInfoFormPersonalData>
            </BuyInfo>
            <BuyInfo
              style={{
                maxHeight: tab === 1 ? "32rem" : "2.8rem",
              }}
              onClick={() => setTab(1)}
            >
              <BuyInfoHeader>Pagamento</BuyInfoHeader>
              <BuyInfoFormPersonalData>
                <PaymentData index={1} onSubmit={handleFormSubmit} />
              </BuyInfoFormPersonalData>
            </BuyInfo>
          </BuyInfos>
          <BuyEventSideCard
            eventDatas={eventData!}
            targetLink={`/event/${eventData?._id}/acknowledgment`}
            buyText="Finalizar compra"
            btnEnable={isAllValid}
          />
        </BuyContent>
      </Content>
    </BuyPageMain>
  );
}
