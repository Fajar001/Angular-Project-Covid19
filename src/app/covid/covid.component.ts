import { Component, OnInit } from '@angular/core';
import { Covid } from './covid';
import { CovidService } from './covid.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  covid: Covid = new Covid();
  submitted =false;

  constructor(private covidService: CovidService, private router:Router) { }

  ngOnInit(): void {
  }

  newCovid(){
    this.submitted=false;
    this.covid = new Covid();
  }

  insert(){
    this.covidService.getInsert(this.covid).subscribe(data=>console.log(data), error=>console.log(error));
    this.covid = new Covid();
    this.gotoList()
  }

  onSubmit(){
    this.submitted=true;
    this.insert();
  }

  gotoList(){
    this.router.navigate(['/table'])
  }
}
