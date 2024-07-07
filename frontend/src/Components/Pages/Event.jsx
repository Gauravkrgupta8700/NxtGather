import React ,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import EventDisplay from '../EventDisplay/EventDisplay';
import Breadcrums from '../Breadcrums/Breadcrums';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedEvents from '../RelatedEvents/RelatedEvents';

const Event = () => {
  const {all_event}=useContext(ShopContext);
  const {EventId}= useParams();
  const Event = all_event.find((e)=>e.id ===Number(EventId));
  return (
  
    <div>
      <Breadcrums Event={Event} />
      <EventDisplay Event={Event} />
      <DescriptionBox />
      <RelatedEvents/>
    </div>
  )
}

export default Event
