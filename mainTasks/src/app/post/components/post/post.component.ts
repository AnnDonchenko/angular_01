import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDeatils():void{
    this.router.navigate(['/posts', this.post.id], {state: this.post})
  }

}
