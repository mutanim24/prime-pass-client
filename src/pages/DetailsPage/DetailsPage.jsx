import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import { Button, Divider, Steps } from 'keep-react';
import { Bank, Calendar, Clock } from 'phosphor-react';

const DetailsPage = () => {
    const event = useLoaderData();
    console.log(event);
    const { _id, image_url, title, description, date, start_time, end_time, venue, ticket_price, event_steps
    } = event;
    return (
        <div>
            <Banner image={image_url} title={title}></Banner>
            <div className='py-5 space-y-3'>
                {/* <h1 className='text-3xl font-bold'>{title}</h1> */}
                <Divider variant="start" className='text-3xl font-bold'>{title}</Divider>
                <p>{date} @{start_time} - {end_time}</p>
                <h3 className='bg-green-700 inline-block font-bold py-2 px-4 text-xl text-white rounded-full'>Price: ${ticket_price}</h3>
                <p>{description}</p>

            </div>
            <div className='py-8'>
                <section className="space-y-3 mb-7">
                    <Divider variant="center" className='text-4xl font-bold'>Event Schedule</Divider>
                </section>

                <Steps stepType="number">
                    {
                        event_steps.map((step, index) => <Steps.Item
                            className='w-48'
                            numberOfSteps={index + 1}
                            completed
                            title={step.time}
                            description={step.activity}
                        />)
                    }

                </Steps>

            </div>
            <div className='shadow-2xl p-10'>
                <h2 className='text-2xl font-semibold mb-4'>DETAILS</h2>
                <div className='flex'>
                    <div className='w-6/12 space-y-5'>
                        <div>
                            <div className='flex gap-2 font-semibold'>
                                <Calendar size={25}></Calendar>
                                <h3>Date</h3>
                            </div>
                            {date}
                        </div>
                        <div>
                            <div className='flex gap-2 font-semibold'>
                                <Clock size={25}></Clock>
                                <h3>Starting Time</h3>
                            </div>
                            {start_time}
                        </div>
                        <div>
                            <div className='flex gap-2 font-semibold'>
                                <Clock size={25}></Clock>
                                <h3>Ending Time</h3>
                            </div>
                            {end_time}
                        </div>
                    </div>
                    <div className='w-6/12'>
                        <div className='flex gap-2 font-semibold'>
                            <Bank size={25}></Bank>
                            <h3>Venue</h3>
                        </div>
                        {venue}
                    </div>
                </div>
            </div>
            <Button className='w-full mt-4' color="success">Book Now</Button>
        </div>
    );
};

export default DetailsPage;