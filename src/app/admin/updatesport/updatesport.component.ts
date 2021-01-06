import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sport } from 'src/app/models/sport';

@Component({
  selector: 'app-updatesport',
  templateUrl: './updatesport.component.html',
  styleUrls: ['./updatesport.component.scss']
})
export class UpdatesportComponent implements OnInit {
  sport:any;
  sportId:number;

  constructor(private adminSrv:AdminService,private route:ActivatedRoute,private router: Router) {
  }

  //Get Sport By Id
  ngOnInit(): void {
    this.sportId=this.route.snapshot.params['id'];
    this.adminSrv.getSport(this.sportId).subscribe(data=>{
      this.sport=data;
    });
  }

  //Update Sport
  updateSport(){
    this.adminSrv.updateSport(this.sportId,this.sport)
    .subscribe(data=>{
  })
  this.router.navigate(['sportlist']);

}
}
