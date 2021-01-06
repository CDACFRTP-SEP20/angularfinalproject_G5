// import { Component, OnInit } from '@angular/core';
// import { Plan } from 'src/app/models/plan';
// import { ManagerService } from 'src/app/services/manager.service';
// import { Router } from '@angular/router';
// import { Sport } from 'src/app/models/sport';

// @Component({
//   selector: 'app-addplan',
//   templateUrl: './addplan.component.html',
//   styleUrls: ['./addplan.component.scss']
// })
// export class AddplanComponent implements OnInit {

//   plan:Plan;
//   assignedsport: any;
//   sport:Sport;
//   userId:number;
//   sportId:number;
//   constructor(private managerserv:ManagerService,private route:Router) {
//     this.plan=new Plan("",0,new Date(),new Date(),0,0,true,0,0);
//    }

//   ngOnInit(): void {
//     this.plan=JSON.parse(sessionStorage.getItem('user') || '{}');
//    console.log(this.plan.userId);

//     //console.log(this.plan.userid);
//     this.managerserv.getAssignedSportForManager(this.plan.userId).subscribe(
//       result=>{
//         this.assignedsport=result;
//         this.plan.sportid=this.assignedsport.sportId;
//       }
//     )

//   }
//   onSubmit(){
//     console.log(this.plan);

//     this.managerserv.addPlan(this.plan).subscribe(
//       result=>{
//         console.log(result);
//         this.route.navigate(['/planlist']);
//       }

//     )


//   }

// }
import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { ManagerService } from 'src/app/services/manager.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.scss']
})
export class AddplanComponent implements OnInit {

  plan:Plan;
  addplanForm:FormGroup;
  constructor(private managerserv:ManagerService,private route:Router,builder: FormBuilder,
    private snackBar: MatSnackBar) {
    this.plan=new Plan("",0,new Date(),new Date(),0,0,true,0,0);
      this.addplanForm=builder.group({
        planName:new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(50)]),
        fees:new FormControl('', [Validators.required]),
        duration:new FormControl('', [Validators.required, Validators.pattern("[0-9]"),Validators.minLength(2)]),
        discount:new FormControl('',[Validators.required, Validators.pattern("[0-9]"),Validators.minLength(2)]),
        startDate:new FormControl('',[Validators.required]),
        userid:new FormControl('',[Validators.required, Validators.pattern("[0-9]")]),
       sportid:new FormControl('',[Validators.required, Validators.pattern("[0-9]")]),
      },{Validators:this.checkDates});

    }
    checkDates(group: FormGroup) {
      if(group.controls.startDate.value > new Date()) {
      return { notValid:true }
      }
      return null;
    }
   get planName(){ return this.addplanForm.get('planName')}
   get fees(){ return this.addplanForm.get('fees')}
   get duration(){return this.addplanForm.get('duration')}
   get discount(){return this.addplanForm.get('discount')}
   get startDate(){return this.addplanForm.get('startDate')}
   get userid(){return this.addplanForm.get('userid')}
   get sportid(){return this.addplanForm.get('sportid')}
;
  ngOnInit(): void {
    console.log(new Date().toLocaleDateString());

  }
  onSubmit(){
    console.log(this.plan.startDate);

    this.managerserv.addPlan(this.addplanForm.value).subscribe(
      result=>{
        console.log(result);
        this.route.navigate(['/planlist']);
      }

    )

    console.log(this.plan);

  }

}
