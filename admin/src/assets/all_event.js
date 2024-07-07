// Assuming you're using Webpack or a similar tool
import p1_img from './Event_1.jpeg';
import p2_img from './Event_2.jpeg';
import p3_img from './Event_3.jpeg';
import p4_img from './Event_4.jpeg';
import tech1 from './tech_workshop.jpeg'
import techgame from './tech_game.jpeg'
import tech3 from './tech1.jpeg';
import tech4 from './future of technology.jpeg'
import music_concert from './Music_concert.jpeg'
import cultural2 from './Multicolor_fest.jpeg'
import seminar from './seminar1.jpeg'
import cultural3 from './Free Folk Festival Flyer Template _ Free Flyer Downloads.jpeg'
import seminar3 from './future of technology.jpeg'
import cultural1 from './cultural.jpeg'


let all_event = [{
        id: 1,
        name: "Singing Competition",
        category: "Cultural_Fest",
        image: p1_img,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",
    }, {
        id: 2,
        name: "Dance Competition",
        image: p2_img,
        category: "Cultural_Fest",
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",
    }, {
        id: 3,
        name: "Tech Series",
        category: "Tech_Fest",
        image: p3_img,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 4,
        name: "Career Opportunity",
        category: "Workshop",
        image: p4_img,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 5,
        name: " AI & ML",
        category: "Tech_Fest",
        image: tech1,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 6,
        name: "Tech Game Chanllenge",
        category: "Tech_Fest",
        image: techgame,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 7,
        name: "Machine Learning",
        category: "Tech_Fest",
        image: tech3,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 8,
        name: "DEEP LEARNING WORKSHOP",
        category: "Tech_Fest",
        image: tech4,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 9,
        name: "How to set Goals",
        category: "Workshop",
        image: seminar,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 10,
        name: "Entrepreneurship Workshop",
        category: "Workshop",
        image: seminar3,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Seminar Hall",
    }, {
        id: 11,
        name: "Music Concert",
        category: "Cultural_Fest",
        image: music_concert,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",
    }, {
        id: 12,
        name: "Multicolor fest",
        category: "Cultural_Fest",
        image: cultural2,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",
    }, {
        id: 13,
        name: "Folk Festival",
        category: "Cultural_Fest",
        image: cultural3,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",

    }, {
        id: 14,
        name: "Fest",
        category: "Cultural_Fest",
        image: cultural1,
        new_price: 40.00,
        old_price: 60.00,
        venue: "Auditorium",
    }

];

export default all_event;