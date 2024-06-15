import { Button } from "keep-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function EventCard({ event }) {
  const { _id, image_url, title, description, date, time, venue, ticket_price } = event;
  return (
    <div className="bg-green-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-64">
        <img
          src={image_url}
          alt="Event banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
      </div>
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-200">${ticket_price}</p>
        <div className="flex gap-4 items-center mt-4">
          <h3 className="text-xl font-bold mr-2">{venue.split(",").slice(1)}</h3>
          <p className="text-gray-200">{date}</p>
        </div>
        <p className="mt-4 text-gray-200">
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Praesent sapien massa, convallis a pellentesque nec, egestas...
        </p>
        <div className="flex mt-6 space-x-2">
          <Link to={`/events-details/${_id}`} className="btn btn-outline-primary bg-white text-black py-2 px-3 rounded font-semibold">View Details</Link>
        </div>
      </div>
    </div>
    
  );
}

export default EventCard;
