import React from 'react';
import { format } from 'date-fns';

const EventCard = ({ event }) => {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-yellow-200 p-4 rounded-md mb-2">
      <div className="flex items-center mb-1">
        <span className="text-sm text-gray-600">{format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}</span>
      </div>
      <h3 className="font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-700"> {event.person}</p>
    </div>
  );
};

export default EventCard;