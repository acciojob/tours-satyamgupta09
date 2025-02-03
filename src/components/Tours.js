// import React,{ useEffect, useState } from "react";
// import "./../styles/App.css";

// const tours = [
//   {
//     id: "rec6d6T3q5EBIdCfD",
//     name: "Best of Paris in 7 Days Tour",
//     info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
//     image:
//       "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
//     price: "1,995",
//   },
//   {
//     id: "recIwxrvU9HfJR3B4",
//     name: "Best of Ireland in 14 Days Tour",
//     info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
//     image:
//       "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
//     price: "3,895",
//   },
//   {
//     id: "recJLWcHScdUtI3ny",
//     name: "Best of Salzburg & Vienna in 8 Days Tour",
//     info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
//     image:
//       "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
//     price: "2,695",
//   },
//   {
//     id: "recK2AOoVhIHPLUwn",
//     name: "Best of Rome in 7 Days Tour",
//     info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
//     image:
//       "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
//     price: "2,095",
//   },
//   {
//     id: "receAEzz86KzW2gvH",
//     name: "Best of Poland in 10 Days Tour",
//     info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
//     image:
//       "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
//     price: "2,595",
//   },
// ];

// export default function Tours() {
//   const [showmore, setShowmore] = useState(() =>
//     tours.map((tour) => ({
//       ...tour,
//       status: false,
//     }))
//   );

//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {}, [tours.length]);

//   const handleDelete = (id) => {
//     setShowmore(function (prevTour) {
//       return prevTour.filter((tour) => tour.id !== id);
//     }); //here return bcoz return is automatically bind in arrow function but not in normal function thats why returning here

//     // setData((prevtour) => prevtour.filter((tour) => tour.id !== id));
//   };

//   const handleRefresh = () => {
//     setShowmore(
//       tours.map((tour) => ({
//         ...tour,
//         status: false,
//       }))
//     );
//   };

//   const handleShow = (id) => {
//     setShowmore((prevShowmore) =>
//       prevShowmore.map((tour) =>
//         tour.id === id ? { ...tour, status: !tour.status } : tour
//       )
//     );
//   };

//   return (
//     <div className="single-tour">
//       <ol>
//         {showmore.map((tour, index) => (
//           <li key={tour.id}>
//             <img src={tour.image} alt={tour.name} className="tour-img" />
//             <h2 className="tour-name">{tour.name}</h2>
//             <p id={`tour-item-para-${tour.id}`}>
//               {tour.status ? tour.info : tour.info.slice(0, 200)}
//             </p>
//             {
//               <button id={tour.status ? `see-less-${tour.id}`:`see-more-${tour.id}`} onClick={() => handleShow(tour.id)}>
//                 {tour.status ? "See less" : "See more"}
//               </button>
//             }
//             <button
//               id={`delete-btn-${tour.id}`}
//               onClick={() => handleDelete(tour.id, index)}
//             >
//               Delete
//             </button>
//             <h4 className="tour-price">{tour.price}</h4>
//           </li>
//         ))}
//       </ol>
//       {showmore.length === 0 && (
//         <div className="refresh">
//           <h4>No items are remaing for deletion</h4>
//           <button className="btn" onClick={handleRefresh}>
//             Refresh
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import "./../styles/App.css";

const tours = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    price: "1,995",
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    image:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    price: "3,895",
  },
  {
    id: "recJLWcHScdUtI3ny",
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    price: "2,695",
  },
  {
    id: "recK2AOoVhIHPLUwn",
    name: "Best of Rome in 7 Days Tour",
    info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    image:
      "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
    price: "2,095",
  },
  {
    id: "receAEzz86KzW2gvH",
    name: "Best of Poland in 10 Days Tour",
    info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
    image:
      "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
    price: "2,595",
  },
];

export default function Tours() {
  const [showmore, setShowmore] = useState(() =>
    tours.map((tour) => ({
      ...tour,
      status: false, // This should be false initially
    }))
  );

  const [isLoading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setShowmore((prevTour) => prevTour.filter((tour) => tour.id !== id));
  };

  const handleRefresh = () => {
    setShowmore(
      tours.map((tour) => ({
        ...tour,
        status: false, // Reset all tours to be collapsed
      }))
    );
  };

  const handleShow = (id) => {
    setShowmore((prevShowmore) =>
      prevShowmore.map((tour) =>
        tour.id === id ? { ...tour, status: !tour.status } : tour
      )
    );
  };

  return (
    <div className="single-tour">
      <ol>
        {showmore.map((tour) => (
          <li key={tour.id}>
            <img src={tour.image} alt={tour.name} className="tour-img" />
            <h2 className="tour-name">{tour.name}</h2>
            <p id={`tour-item-para-${tour.id}`}>
              {tour.status ? tour.info : tour.info.slice(0, 200)}
            </p>
            <button
              id={tour.status ? `see-less-${tour.id}` : `see-more-${tour.id}`}
              onClick={() => handleShow(tour.id)}
            >
              {tour.status ? "See less" : "See more"}
            </button>
            <button
              id={`delete-btn-${tour.id}`}
              onClick={() => handleDelete(tour.id)}
            >
              Delete
            </button>
            <h4 className="tour-price">{tour.price}</h4>
          </li>
        ))}
      </ol>
      {showmore.length === 0 && (
        <div className="refresh">
          <h4>No items remaining for deletion</h4>
          <button className="btn" onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
