import React, { useState } from 'react';
import { ViewSelector } from './viewSelector';

const CalendarHeader = ({ view, setView }) => {

    return (
        <div className="flex justify-between items-center mb-4  flex-col">
            <div className='w-full flex justify-between'>
                <h1 className="text-2xl font-semibold">Calendar</h1>
                <button className="ml-4 px-4 py-2 rounded-md text-pink-500 font-bold">+ New event</button></div>
            <div className='w-full'>
                <ViewSelector view={view} onChange={setView}/>
                {/* <button
                    className={`px-4 py-2 rounded-md ${view === 'daily' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    onClick={() => setView('daily')}
                >
                    Daily
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${view === 'weekly' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    onClick={() => setView('weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${view === 'monthly' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    onClick={() => setView('monthly')}
                >
                    Monthly
                </button> */}

            </div>
        </div>
    );
};

export default CalendarHeader;