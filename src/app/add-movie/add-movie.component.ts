import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = this.fb.group({
    title: [''],
    description: [''],
    imageUrl: ['']
  })

  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit() {
    console.log('movieForm', this.movieForm);
  }

  onSubmit() { 
    const title = this.movieForm.value.title; 
    const description = this.movieForm.value.description; 
    const imageUrl = this.movieForm.value.imageUrl; 

    this.movieService.addMovie(title, description, imageUrl);
  }

}
