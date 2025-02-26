import React from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval } from 'date-fns';
import EventCard from './EventCard';

const WeeklyView = ({ selectedDate, events }) => {
  const start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // Sunday
  const end = endOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({ start, end });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">
        {format(start, 'MMMM dd')} - {format(end, 'MMMM dd, yyyy')}
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {weekDays.map(day => {
          const dayEvents = events.filter(event =>
            isWithinInterval(event.start, { start: day, end: day })
          );

          return (
            <div key={day.toISOString()} className="p-2 border rounded">
              <h4 className="text-sm font-semibold mb-1">{format(day, 'EEE dd')}</h4>
              {dayEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyView;