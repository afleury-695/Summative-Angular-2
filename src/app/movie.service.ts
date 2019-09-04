import { Injectable } from '@angular/core';

export class Movie {
  title: string;
  description: string; 
  imageUrl: string; 

  constructor(title: string, description: string, imageUrl: string) {
    this.title = title;
    this.description = description; 
    this.imageUrl = imageUrl; 
  }
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  movies: Movie[] = [
  
    new Movie("Pirates of the Caribbean", "Capt. Jack Sparrow (Johnny Depp) arrives at Port Royal in the Caribbean without a ship or crew. His timing is inopportune, however. ", "../assets/piratesimage.jpg"),
    new Movie("The Princess Bride", "A fairy tale adventure about a beautiful young woman and her one true love. He must find her after a long separation and save her.", "../assets/princessbrideimage.jpg"),
    new Movie("The Amazing SpiderMan", "Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). ", "../assets/amazingspidermanimage.jpg"),
    new Movie("Inception", "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves..", "../assets/breakfastclubimage.jpg"),
    new Movie("Deadpool", "Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool.", "../assets/deadpoolimage.jpg")
  ]

  constructor() { }


addMovie(title: string, description: string, imageUrl: string) { 
  this.movies.push(new Movie(title, description, imageUrl));
}

getMovies(): Movie[]{ 
  return this.movies; 
}

deleteMovie(i: number) { 
  console.log(i); 
  this.movies.splice(i, 1);
}
}

