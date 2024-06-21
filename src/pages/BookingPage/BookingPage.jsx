import { Button, Divider, Icon, Input, Label } from 'keep-react';
import { Calendar, Clock, Envelope, MapPin, Person, Ticket, User } from 'phosphor-react';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const BookingPage = () => {
// const {user} = useContext(AuthPro)

    const location = useLocation();
    const { event } = location.state || {};
    const { _id, image_url, title, description, date, start_time, end_time, venue, ticket_price, event_steps,
        available_tickets } = event;

    return (
        <div>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image_url})` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                <div className="relative container px-4 py-20 space-y-5">
                    <h2 className='text-2xl inline font-semibold bg-green-800 py-2 px-6 rounded-full text-white'>Let's Join</h2>
                    <h1 className="text-4xl font-bold  text-white mb-8">{title}</h1>
                    <div className='bg-green-800 p-4 rounded-lg shadow-lg space-y-5'>
                        <h1 className='text-2xl font-serif font-bold text-white'>Price: ${ticket_price}</h1>
                        <div className='grid grid-cols-4 gap-1'>
                            <div className='bg-white p-4 rounded space-y-2'>
                                <span className='flex gap-1 items-center'>
                                    <MapPin size={22}></MapPin>
                                    <h2 className='text-xl font-bold'>Venue</h2>
                                </span>
                                <Divider></Divider>
                                <h4 className='text-sm'>{venue}</h4>
                            </div>
                            <div className='bg-white space-y-2 p-4 rounded'>
                                <span className='flex gap-1 items-center'>
                                    <Calendar size={22} />
                                    <h2 className='text-xl font-bold'>Date</h2>
                                </span>
                                <Divider></Divider>
                                <h4 className='text-sm'>{date}</h4>
                            </div>
                            <div className='bg-white space-y-2 p-4 rounded'>
                                <span className='flex gap-1 items-center'>
                                    <Clock size={22}></Clock>
                                    <h2 className='text-xl font-bold'>Time</h2>
                                </span>
                                <Divider></Divider>
                                <h4 className='text-sm'><span>{start_time} - {end_time}</span></h4>
                            </div>
                            <div className='bg-white space-y-2 p-4 rounded'>
                                <span className='flex gap-1 items-center'>
                                    <Ticket size={22} />
                                    <h2 className='text-xl font-bold'>Ticket</h2>
                                </span>
                                <Divider></Divider>
                                <h4 className='text font-bold'>{available_tickets}</h4>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='py-10 space-y-7'>

                <form className='w-8/12 p-5 mx-auto shadow-lg space-y-4'>
                <Divider variant='center' className=' text-black font-bold text-3xl'> Book Now</Divider>
                    <h1 className='text-3xl font-bold text-center mb-3'></h1>
                    <fieldset className="max-w-md space-y-1">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Your Name" type="text" />
                    </fieldset>
                    <fieldset className="max-w-md space-y-1">
                        <Label htmlFor="email">Your Email</Label>
                        <Input  id="email" placeholder="Your Email" type="email" />
                    </fieldset>
                </form>


            </div>
        </div>
    );
};

export default BookingPage;