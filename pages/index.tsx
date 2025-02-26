import React, { useState } from 'react';
import CalendarHeader from '../components/CalendarHeader';
import DailyView from '../components/DailyView';
import WeeklyView from '../components/WeeklyView';
import MonthlyView from '../components/MonthlyView';
import { mockEvents } from '../utils/mockData';

const IndexPage = () => {
  const [view, setView] = useState('daily'); // 'daily', 'weekly', 'monthly'
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container mx-auto p-4 md:px-40 lg:px-80">
      <div className='shadow-lg h-screen p-4'>
        <CalendarHeader view={view} setView={setView} />
        {view === 'daily' && <DailyView selectedDate={selectedDate} events={mockEvents} setSelectedDate={setSelectedDate} />}
        {view === 'weekly' && <WeeklyView selectedDate={selectedDate} events={mockEvents} />}
        {view === 'monthly' && <MonthlyView selectedDate={selectedDate} events={mockEvents} />}
      </div>
    </div>
  );
};

export default IndexPage;