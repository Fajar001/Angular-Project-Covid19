import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from 'app/covid/covid.service';
import { Covid } from 'app/covid/covid';

@Component({
  selector: 'app-covid-update',
  templateUrl: './covid-update.component.html',
  styleUrls: ['./covid-update.component.css']
})
export class CovidUpdateComponent implements OnInit {

  idCovidCity : number;
  covid: Covid;
  constructor(private route: ActivatedRoute, private router: Router, private covidService: CovidService) { }

  ngOnInit(): void {
    this.covid = new Covid();
    this.idCovidCity = this.route.snapshot.params['idCovidCity'];
    // this.covidService.getList(this.idCovidCity).subscribe(data=>{
    //   console.log(data);
    //   // this.covid = data;
    // },
    // error=> console.log(error));
  }

  updateCovid(){
    this.covidService.getUpdate(this.idCovidCity, this.covid).subscribe(
      data=>console.log(data), error=> console.log(error));
    this.covid = new Covid();
    this.gotoList();
  }

  onSubmit(){
    this.updateCovid();
  }

  gotoList(){
    this.router.navigate(['/covid'])
  }

}
