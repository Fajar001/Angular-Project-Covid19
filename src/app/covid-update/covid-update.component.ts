import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from 'app/covid/covid.service';
import { Covid } from 'app/covid/covid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid-update',
  templateUrl: './covid-update.component.html',
  styleUrls: ['./covid-update.component.css']
})
export class CovidUpdateComponent implements OnInit {

  idCovidCity : number;
  cityName : string;
  caseByCity : number;
  deathsByCity: number;
  recovered:number;
  // covids:Observable<Covid[]>;
  covid: Covid;
  isupdate=false;
  submitted=false;
  pil : Covid = new Covid();
  id:number

  constructor(private route: ActivatedRoute,private router: Router, private covidService: CovidService) { }

  ngOnInit() {
    this.covid = new Covid();
    this.idCovidCity = this.route.snapshot.paramMap.get['idCovidCity'];
    // console.log(this.idCovidCity); 
    this.route.queryParams
      .subscribe(params => {
        console.log(params.id); 
    });
    // console.log(this.idCovidCity)
    // this.covidService.getCovid(this.idCovidCity).subscribe(data=>{
    //   console.log(data);
    //   this.covid= data;
    // },
    // error=>console.log(error));
    
    // this.submitted=false;
    // this.covidService.getUpdate(this.idCovidCity,this.cityName, this.caseByCity, this.deathsByCity, this.recovered)
    // this.covidService.getList().subscribe(data =>
    //   {  
    //     this.covid =data 
    //   });   
  }

  updateCovid(idCovidCity: number, cityName:string, caseByCity:number, deathsByCity:number, recovered:number){
    this.covidService.getUpdate(idCovidCity, cityName, caseByCity, deathsByCity, recovered).subscribe(
      data=>console.log(data), error=> console.log(error));
    this.gotoList();
  }

  onSubmit(){
    this.submitted=true;
    this.updateCovid(this.idCovidCity, this.cityName, this.caseByCity, this.deathsByCity, this.recovered);
  }

  gotoList(){
    this.router.navigate(['/covid'])
  }

  updateCov(data:Covid){
    this.route.queryParams
      .subscribe(params => {
        this.pil.idCovidCity=params.id 
        this.pil.cityName=data.cityName
        this.pil.caseByCity=data.caseByCity
        this.pil.deathsByCity=data.deathsByCity
        this.pil.recovered=data.recovered
        this.updateCovid(params.id, data.cityName, data.caseByCity, data.deathsByCity, data.recovered);
        this.insertList();
    });
  }

  insertList(){
    this.covidService.getfindAllTotal().subscribe(data=>console.log(data), error=>console.log(error));
  }
}
