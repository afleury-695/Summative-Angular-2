import { Component, OnInit } from '@angular/core';
import { Movie, MovieService} from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: Movie[] = []; 
  title: string = '';
  description: string = '';
  imageUrl: string = '';


  displayList : boolean = true; 
  movieBeingDisplayed: Movie; 
  //
  movieIdsBeingEdited = {};

  constructor(private movieService: MovieService) {
    this.movieService = movieService; 
   }

  ngOnInit() {
    this.getMovies();
    this.movieBeingDisplayed = this.movies[0];
    //remove this part later, it's to test if this actually runs 
    console.log("Yes, the oninit thing is actually running in List Component");

  }

  onDeleteMovie(i: number) { 
    this.movieService.deleteMovie(i);
    this.getMovies();
  }

  onStartEditMovie(i: number) { 
    this.movieIdsBeingEdited[i] = true; 
    //tests this 
    console.log("Editing the movie runs in listcomponent.ts")
  }

  onSaveEditMovie(i: number) { 
    this.movieIdsBeingEdited[i] = false;
    //tests this 
    console.log("Saving the edited movie runs in listcomponent.ts")
  }


  onCreateNewMovie(title: string, description: string, imageUrl: string) { 
    this.movieService.addMovie(title, description, imageUrl);
    
    //note to self might have to come back and rename these variables to newTitle etc
    this.title = "";
    this.description = "";
    this.imageUrl = "";

    this.getMovies(); 
  }

  getMovies() { 
    setTimeout(() => { 
      this.movies = this.movieService.getMovies(); 

    }, 0 );
  }
  onViewMovieDetails(movie: Movie) { 
    this.movieBeingDisplayed = movie; 
  }
 
}
