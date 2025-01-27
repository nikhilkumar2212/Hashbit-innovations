import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";

const images = {
  movie1: require("../assets/movie1.jpg"),
  movie2: require("../assets/movie2.jpg"),
  movie3: require("../assets/movie3.jpg"),
  movie4: require("../assets/movie4.jpg"),
  movie5: require("../assets/movie5.jpg"),
  movie6: require("../assets/movie6.jpg"),
  movie7: require("../assets/movie7.jpg"),
  movie8: require("../assets/movie8.jpg"),
  movie9: require("../assets/movie9.jpg"),
  movie10: require("../assets/movie10.jpg"),
  movie11: require("../assets/movie11.jpg"),
  movie12: require("../assets/movie12.jpg"),
};

const movies = [
  {
    "id": 1,
    "name": "Avatar",
    "description": "A visually stunning masterpiece set in the distant world of Pandora, where humans clash with the indigenous Na'vi people over the precious resource Unobtanium. Follow Jake Sully, a paraplegic Marine, as he connects with the Na'vi and discovers the beauty and struggles of their world.",
    "imageKey": "movie1",
    "price": 250
  },
  {
    "id": 2,
    "name": "Monster House",
    "description": "An animated adventure that delves into the spooky and mysterious world of a haunted house that seems to have a life of its own. When a group of kids discovers the truth about their creepy neighborhood house, they embark on a thrilling journey filled with unexpected twists and courage.",
    "imageKey": "movie2",
    "price": 200
  },
  {
    "id": 3,
    "name": "Titanic",
    "description": "A tragic yet heartwarming tale of love and sacrifice aboard the infamous RMS Titanic. Witness the romance between Jack, a free-spirited artist, and Rose, a wealthy socialite, as they navigate the class divide and face the catastrophic sinking of the 'unsinkable' ship.",
    "imageKey": "movie3",
    "price": 300
  },
  {
    "id": 4,
    "name": "The Matrix",
    "description": "Enter a groundbreaking sci-fi world where the boundary between reality and illusion is blurred. Follow Neo as he uncovers the truth about The Matrix, a simulated reality controlled by machines, and joins a rebellion to fight for humanity's freedom.",
    "imageKey": "movie4",
    "price": 280
  },
  {
    "id": 5,
    "name": "Red Coat",
    "description": "Set in the backdrop of colonial times, 'Red Coat' tells the gripping story of a brave soldier who unravels a mystery surrounding a forbidden treasure. With suspense, action, and a touch of history, this is an unforgettable tale of courage and resilience.",
    "imageKey": "movie5",
    "price": 220
  },
  {
    "id": 6,
    "name": "The Witcher",
    "description": "Based on the popular fantasy series, 'The Witcher' follows Geralt of Rivia, a solitary monster hunter, as he navigates a world filled with mystical creatures, dangerous enemies, and morally complex choices. Dive into an epic tale of destiny, love, and survival.",
    "imageKey": "movie6",
    "price": 350
  },
  {
    "id": 7,
    "name": "Aladin",
    "description": "A kind-hearted street thief discovers a magical lamp and teams up with a wisecracking Genie to win Princess Jasmine’s heart and stop the evil Jafar. Aladdin is a tale of courage, love, and self-discovery that proves you don’t need a magic lamp to change the world—you just need to believe in yourself.",
    "imageKey": "movie7",
    "price": 270
  },
  {
    "id": 8,
    "name": "Avatar: The Way of Water",
    "description": "The long-awaited sequel to 'Avatar,' this breathtaking adventure explores the stunning underwater world of Pandora. Join Jake Sully, Neytiri, and their family as they navigate new challenges, forge alliances, and fight for their home against powerful enemies.",
    "imageKey": "movie8",
    "price": 320
  },
  {
    "id": 9,
    "name": "Split",
    "description": "A psychological thriller that explores the dark and unsettling world of Kevin, a man with 23 distinct personalities. As his 24th and most dangerous identity, 'The Beast,' emerges, three kidnapped girls must escape his deadly grasp before it's too late.",
    "imageKey": "movie9",
    "price": 200
  },
  {
    "id": 10,
    "name": "Oppenheimer",
    "description": "A gripping biographical drama that chronicles the life of J. Robert Oppenheimer, the father of the atomic bomb. Explore his journey from a brilliant physicist to a man grappling with the moral consequences of his groundbreaking but devastating invention.",
    "imageKey": "movie10",
    "price": 300
  },
  {
    "id": 11,
    "name": "Jurassic Park",
    "description": "A thrilling journey into a revolutionary theme park where dinosaurs have been brought back to life using genetic engineering. When the park's safety measures fail, chaos ensues, and visitors must survive the deadly creatures roaming free.",
    "imageKey": "movie11",
    "price": 250
  },
  {
    "id": 12,
    "name": "Interstellar",
    "description": "Christopher Nolan's sci-fi epic that follows a team of astronauts as they venture through a wormhole in search of a new home for humanity. With stunning visuals and a heart-wrenching story, 'Interstellar' explores the depths of space, time, and human emotion.",
    "imageKey": "movie12",
    "price": 280
  }
]
;

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-details-container">
      <header className="header">
        <h1>🎬 BookMyMovie</h1>
      </header>
      <div className="movie-details-content">
        <img src={images[movie.imageKey]} alt={movie.name} className="movie-img" />
        <div className="movie-details-info">
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
          <p className="movie-price">Ticket Price: ₹{movie.price}</p>
          <Link to={`/book/${movie.id}`}>
            <button className="book-now-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
