import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film,Genre, Comment, Companies } from '../type';
import { FilmService } from '../film.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  film?: Film
  genres?: Genre[];
  comments?: Comment[];
  companies?: Companies[];
  error= '';

  commentForm : FormGroup;

  constructor(private route: ActivatedRoute, private filmService : FilmService, private fb: FormBuilder, private router : Router) {
    this.commentForm = this.fb.group({
      rating: '5',
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
        this.comments = film?.comments;
        this.companies = film?.production_companies;
        console.log(this.comments)
      }
    })
    
  }

  addComment() {
    const commentData = this.commentForm.value;
    const id =Number(this.route.snapshot.paramMap.get('id')); 
    console.log("test : ", this.commentForm.value);
    this.filmService.createComment(id, commentData)
    .subscribe( {
      next: (comment) => {
        console.log(`Commentaire créé avec l'id ${comment.id}`);
        this.comments?.push(comment)
      },
      error: (error) => {
        console.error('Could not create comment', error);
        this.error = error;
      }
    })
  }

}
