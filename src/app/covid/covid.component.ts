import { Component, OnInit } from '@angular/core';
import { Covid } from './covid';
import { CovidService } from './covid.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';

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
    this.submitted=false;
  }

  newCovid(){
    this.submitted=false;
    this.covid = new Covid();
  }

  saveInsert(saveInsert){
    this.covid=new Covid();
    this.covid.cityName;
    this.covid.caseByCity;
    this.covid.deathsByCity;
    this.covid.recovered;
    this.submitted=true;
    this.insert();
    this.insertList();
  }

  insert(){
    this.covidService.getInsert(this.covid).subscribe(data=>console.log(data), error=>console.log(error));
    this.covid = new Covid();
    this.gotoList()
    this.insertList();
  }

  insertList(){
    this.covidService.getfindAllTotal().subscribe(data=>console.log(data), error=>console.log(error));
  }

  onSubmit(){
    this.submitted=true;
    this.insert();
  }

  gotoList(){
    this.router.navigate(['/tables'])
  }

  
}
