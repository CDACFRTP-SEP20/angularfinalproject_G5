import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as Chart from 'chart.js';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Plan } from 'src/app/models/plan';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  showFiller = false;
  title = "Sport Enrollment chart";
  PieChart : any;
  sportName: any;
  userCount:any;
  numOfUser:any;
  numOfManager: any;
  numOfSport:any;
  numOfPlan:any;
  numOfEnrollment:any;
  chart : any;
  likes:any;
  disLikes:any;
  LineChart: any;
  datasource:any;
  planData: Plan[]=[];

    //Mat Table Header Display Def.
    displayedColumns:String[]=['planName','fees','discount'];

    @ViewChild(MatSort) sort: MatSort;  //table sorting
    @ViewChild(MatPaginator) paginator: MatPaginator; //table pagination

  constructor(private adminService: AdminService) {
  }

  //Bar Graph
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Users', 'Managers', 'Sports', 'Plans', 'Enrollments'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  arr:any[]=[]

  barChartData: ChartDataSets[] = [
    { data: this.arr, label: 'Count : ' ,}
  ];
  options: {
    scales: {
        yAxes: [{
            ticks: {
              max: 10,
              min: 0,
              stepSize: 1
            }
        }]
    }
}
  public barChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    },
  ];




  ngOnInit(): void {

    //for table
    this.adminService.getPlanReport().subscribe( (result: any)=>{
        this.planData=result;
        this.datasource = new MatTableDataSource<Plan>(this.planData);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
      })

      //for pie chart
    this.adminService.getSportEnrollment().subscribe((data) => {
      this.sportName = data[0];
      this.userCount=data[1];

      this.PieChart = new Chart("pieChart", {
        type: "pie",
        data: {
          labels: this.sportName ,
          datasets: [
            {
              label: "Sport Report",
              data: this.userCount,
              backgroundColor: ['rgba(255,99,132,0.2)','rgba(54,162,235,0.2)','rgba(255,206,86,0.2)','rgba(75,192,192,0.2)','rgba(153,102,255,0.2)','rgba(255,159,164,0.2)'],
              borderColor:['rgba(255,99,132,1)','rgba(54,162,235,1)','rgba(255,206,86,1)','rgba(75,192,192,1)','rgba(153,102,255,1)','rgba(255,159,164,1)'],
            },
          ],
        },
        options: {
         // title: { Text: "Bar Chart", display: true, is3D: true },
          //scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        },
      });
    });

    //for line graph
    this.adminService.getSportReview().subscribe((data1) => {
      this.sportName = data1[0];
      this.likes=data1[1];

      this.LineChart = new Chart("lineChart", {
        type: "line",
        data: {
          labels: this.sportName ,
          datasets: [
            {
              label: "Sport Like",
              data: this.likes,
              backgroundColor: ['rgba(255,99,132,0.2)','rgba(54,162,235,0.2)','rgba(255,206,86,0.2)','rgba(75,192,192,0.2)','rgba(153,102,255,0.2)','rgba(255,159,164,0.2)'],
              borderColor:['rgba(255,99,132,1)','rgba(54,162,235,1)','rgba(255,206,86,1)','rgba(75,192,192,1)','rgba(153,102,255,1)','rgba(255,159,164,1)'],
            },
          ],
        },
        options: {
         // title: { Text: "Bar Chart", display: true, is3D: true },
          //scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        },
      });
    });

    //to get bar array data
    this.adminService.numOfUser().subscribe((response) => {
      this.numOfUser = response;
      this.arr.push(this.numOfUser)
    });
    this.adminService.numOfManager().subscribe((response) => {
      this.numOfManager = response;
      this.arr.push(this.numOfManager)
    });
    this.adminService.numOfSport().subscribe((response) => {
      this.numOfSport = response;
      this.arr.push(this.numOfSport)
    });
    this.adminService.numOfPlan().subscribe((response) => {
      this.numOfPlan = response;
      this.arr.push(this.numOfPlan)
    });
    this.adminService.numOfEnrollment().subscribe((response) => {
      this.numOfEnrollment = response;
      this.arr.push(this.numOfEnrollment)
    });

  }

}
