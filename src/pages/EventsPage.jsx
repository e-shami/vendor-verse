import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log("allEvents", allEvents);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div>
            {allEvents.length > 0 ? (
              allEvents.map((event) => (
                  <EventCard active={event.id} key={event.id} />
              ))
            ) : (
              <h2>No events found</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
