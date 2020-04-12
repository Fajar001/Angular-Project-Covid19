import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { CovidService } from 'app/covid/covid.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListCovid } from '../tables/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    listTotal: Observable<ListCovid[]>
    list = new ListCovid()
    data:number[]
  
  constructor(private covidService: CovidService, private router: Router) { }

  ngOnInit() {
    this.chart(this.data)
  }


    chart(data:number[]){
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['Total Deaths', 'Total Cases', 'Total Recovered'],
        series: data
      },
      this.emailChartLegendItems = [
        { title: 'Total Deaths', imageClass: 'fa fa-circle text-info' },
        { title: 'Total Cases', imageClass: 'fa fa-circle text-danger' },
        { title: 'Total Recovered', imageClass: 'fa fa-circle text-warning' }
      ]
    }

    insertList(){
      this.covidService.getfindAllTotal().subscribe(data=>{
        this.chart(data)
      },
      error=>console.log());
    }
}
