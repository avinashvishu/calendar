// import React from 'react';
// import { format, isSameDay, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval } from 'date-fns';
// import EventCard from './EventCard';

// const DailyView = ({ selectedDate, events }) => {
//   const dailyEvents = events.filter(event => isSameDay(event.start, selectedDate));
//   const start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // Sunday
//   const end = endOfWeek(selectedDate, { weekStartsOn: 0 });
//   const weekDays = eachDayOfInterval({ start, end });
//   console.log(selectedDate)//Wed Feb 26 2025 22:39:11 GMT+0530 (India Standard Time)
//   return (
//     <div>
//       {/* <h2 className="text-lg font-semibold mb-2">{format(selectedDate, 'EEEE, MMMM dd, yyyy')}</h2> */}
//       <div className="grid grid-cols-7 gap-4">
//         {weekDays.map(day => {
//           const dayEvents = events.filter(event =>
//             isWithinInterval(event.start, { start: day, end: day })
//           );

//           console.log(dayEvents)

//           return (
//             // I want one more if the is selectedDate is equal to the day is equal to the selectedDate then bg should be changed   
//             <div key={day.toISOString()} className={`p-2 rounded ${selectedDate==dailyEvents?'bg-black':'bg-orange-300'}`}>
//               <h4 className="text-sm font-semibold mb-1 flex flex-col items-center">
//                 <span>{format(day, 'EEE')}</span>
//                 <span>{format(day, 'dd')}</span>

//               </h4>
//               {dayEvents.map(event => (
//                 <EventCard key={event.id} event={event} />
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default DailyView;



import React from 'react';
import { format, isSameDay, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval } from 'date-fns';
import EventCard from './EventCard';

const DailyView = ({ selectedDate, events, setSelectedDate }) => {
  const dailyEvents = events.filter(event => isSameDay(event.start, selectedDate));
  const start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // Sunday
  const end = endOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({ start, end });

  return (
    <div className='flex flex-col gap-8'>

      <div className="grid grid-cols-7 gap-4 px-10">
        {weekDays.map(day => {
          const dayEvents = events.filter(event =>
            isWithinInterval(event.start, { start: day, end: day })
          );

          const isSelected = isSameDay(day, selectedDate);

          return (
            // I want a onclick function which change const [selectedDate, setSelectedDate] = useState(new Date()); if we click on it 
            <div key={day.toISOString()} className={`p-2 rounded ${isSelected ? 'bg-red-300 bg-opacity-55' : 'bg-white'} cursor-pointer md:w-[60%]`}
              onClick={() => setSelectedDate(day)}
            >
              <h4 className={`text-sm font-semibold mb-1 flex flex-col items-center gap-2 ${isSelected ? 'text-pink-600' : 'bg-white'}`}>
                <span>{format(day, 'EEE')}</span>
                <span>{format(day, 'dd')}</span>
                <span className={`h-2 w-2 rounded-full ${isSelected ? 'bg-pink-600' : 'bg-white'}`}></span>
              </h4>
            </div>
          );
        })}
      </div>

      {/* <h2 className="text-lg font-semibold mb-2">{format(selectedDate, 'EEEE, MMMM dd, yyyy')}</h2> */}
      <div>
        {dailyEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DailyView;