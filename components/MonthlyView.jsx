import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';

const MonthlyView = ({ selectedDate, events }) => {
  const start = startOfMonth(selectedDate);
  const end = endOfMonth(selectedDate);
  const monthDays = eachDayOfInterval({ start, end });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{format(selectedDate, 'MMMM yyyy')}</h2>
      <div className="grid grid-cols-7 gap-2">
        {monthDays.map(day => {
          const dayEvents = events.filter(event => isSameDay(event.start, day));
          return (
            <div
              key={day.toISOString()}
              className={`p-2 border rounded ${isSameMonth(day, selectedDate) ? '' : 'bg-gray-100 text-gray-400'}`}
            >
              <h4 className="text-sm font-semibold">{format(day, 'dd')}</h4>
              {dayEvents.length > 0 && (
                <div className="mt-1">
                  {dayEvents.map(event => (
                    <p key={event.id} className="text-xs">{event.title}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyView;