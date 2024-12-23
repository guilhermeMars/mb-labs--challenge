"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchEvents, Event } from "@/mock/eventData";

interface EventContextProps {
  events: Event[];
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Gera os eventos uma vez
    setEvents(fetchEvents());
  }, []);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext deve ser usado dentro de EventProvider");
  }
  return context;
};
