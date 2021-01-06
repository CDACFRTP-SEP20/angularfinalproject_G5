import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit,OnDestroy {

  sportId:number;
  rating=2;
  starCount: number = 5;
  color: string = 'accent';
  ratingUpdated = new EventEmitter();
  user:User;
  feedback:string;
  /**The subscription sink object that stores all subscriptions */
  private sub=new SubSink();


   snackBarDuration: number = 2000;
   ratingArr:number[] = [];
   index=0

  constructor(private activateRouter:ActivatedRoute,private snackBar: MatSnackBar,
    private userSrv:UserService) { }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user') || '{}');
    this.sportId=parseInt(this.activateRouter.snapshot.paramMap.get('id') || '');
    console.log(this.sportId);
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }

  }
   onClick(rating:number) {
    console.log(rating)
    this.rating=rating;
    this.userSrv.updateUsersRating(this.user.userId,this.sportId,rating).subscribe(
      result=>{
        console.log(result);
        if(result)
        {
          this.snackBar.open('You rated ' + rating + ' / ' + this.starCount+'. Thank you for rating.', '', {
            duration: this.snackBarDuration
          });
        }

      }
    )


    this.ratingUpdated.emit(rating.toString());
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  // submit feedback
  submitFeedback(){

    this.userSrv.updateUsersComment(this.user.userId,this.sportId,this.feedback).subscribe(
      result=>{
        if(result)
        {
          this.snackBar.open('You are awesome! 👌 \nThanks for your valuable time', '', {
            duration: this.snackBarDuration
          });
        }


      }
    )


  }
  //unsubscribes all subscriptions when the component / object gets destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
