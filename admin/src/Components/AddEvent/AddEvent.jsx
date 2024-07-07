import React, { useState } from 'react';
import './AddEvent.css';
import upload from '../../assets/upload.png';

const AddEvent = () => {
    const [image, setImage] = useState(false);
    const [eventDetails, setEventDetails] = useState({
        name: "",
        image: "",
        category: "Tech_Fest",
        new_price: "",
        old_price: "",
        venue: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
    };

    const Add_Event = async () => {
        try {
            const formData = new FormData();
            formData.append('event', image);

            const uploadResponse = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image');
            }

            const uploadData = await uploadResponse.json();
            if (!uploadData.success) {
                throw new Error('Image upload failed');
            }

            const updatedEvent = { ...eventDetails, image: uploadData.image_url };

            const addEventResponse = await fetch('http://localhost:4000/addevent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedEvent),
            });

            if (!addEventResponse.ok) {
                throw new Error('Failed to add event');
            }

            const eventData = await addEventResponse.json();
            if (!eventData.success) {
                throw new Error('Failed to add event: ' + eventData.message);
            }

            alert('Event added successfully');
        } catch (error) {
            console.error('Error adding event:', error.message);
            alert('Failed to add event: ' + error.message);
        }
    };

    return (
        <div className='add-event'>
            <div className="addevent-itemfield">
                <p>Event Title</p>
                <input type='text' value={eventDetails.name} onChange={changeHandler} name='name' placeholder='Type here' />
            </div>
            <div className="addevent-itemfield">
                <p>Venue</p>
                <input type='text' value={eventDetails.venue} onChange={changeHandler} name='venue' placeholder='Type here' />
            </div>
            <div className="addevent-price">
                <div className="addevent-itemfield">
                    <p>Price</p>
                    <input type='text' value={eventDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' />
                </div>
                <div className="addevent-itemfield">
                    <p>Offer Price</p>
                    <input type='text' value={eventDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addevent-itemfield">
                <p>Event Category</p>
                <select name='category' value={eventDetails.category} onChange={changeHandler} className='add-event-selector'>
                    <option value="Tech_Fest">Tech_Fest</option>
                    <option value="Cultural_Fest">Cultural_Fest</option>
                    <option value="Workshop">Workshop</option>
                </select>
            </div>
            <div className="addevent-itemfield">
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload} className='addevent-thumnail-img' alt="Upload" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_Event} className='addevent-btn'>Add</button>
        </div>
    );
};

export default AddEvent;
