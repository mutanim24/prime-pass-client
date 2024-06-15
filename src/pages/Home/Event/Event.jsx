import { useState } from "react";
import EventCard from "../../../components/EventCard/EventCard";
// import EventCard from "../../components/EventCard/EventCard"

const Event = () => {

    const [events, setEvents] = useState([])

    fetch("http://localhost:5000/events")
    .then(result => result.json())
    .then(data => setEvents(data))
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                events.map(event => <EventCard 
                    key={event._id} 
                    event={event}></EventCard>)
            }
        </div>
    );
};

export default Event;