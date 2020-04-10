import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  //pemanggilan model
  submitted =false;
  constructor() { }

  ngOnInit(): void {
  }

  newCovid(){
    this.submitted=false;
    //this.model = new Model()
  }

  insert(){
    //this.nama_servoce.createCovid(this.model).subscribe(data=>console.log(data), error=>console.log(error))
    //this.model
    this.gotoList()
  }

  onSubmit(){
    this.submitted=true;
    this.insert();
  }

  gotoList(){
    // this.router.navigate(['/model'])
  }
}
