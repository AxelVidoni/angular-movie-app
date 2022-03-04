import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film,Genre } from '../type';
import { FilmService } from '../film.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  film?: Film
  genres?: Genre[];

  commentForm : FormGroup;

  constructor(private route: ActivatedRoute, private filmService : FilmService, private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      rating: '',
      text: ''
    })
    
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.filmService.getFilm(id)
    .subscribe( {
      next: (film) => {
        this.film = film
        this.genres = film?.genres;
        console.log(film?.comments)
      }
    })
    
  }

  addComment() {
    const commentData = this.commentForm.value;
    console.log("test : ", this.commentForm.value);
    this.filmService.createComment(Number(this.route.snapshot.paramMap.get('id')), commentData)
    .subscribe( {
      next: (comment) => {
        console.log(`Commentaire créé avec l'id ${comment.id}`);
      },
      error: (error) => {
        console.error('Could not create comment', error);
        
      }
    })
  }

}
