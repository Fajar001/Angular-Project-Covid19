import { Component, OnInit } from '@angular/core';
import { Covid } from 'app/covid/covid';
import { Observable } from 'rxjs'
import { CovidService } from 'app/covid/covid.service';
import { Router } from '@angular/router';
import { ListCovid } from './list';

// declare interface TableData {
//     headerRow: string[];
//     dataRows: string[][];
// }

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    // public tableData1: TableData;
    // public tableData2: TableData;
    covids: Observable<Covid[]>;
    listTotal: Observable<ListCovid[]>

  constructor(private covidService: CovidService, private router: Router) { }

  ngOnInit() {
      this.reloadData();
      this.reloadList();
    //   this.covidService.getfindAll().subscribe(data=>{
    //     console.log(data)
    //   },
    //   error=>console.log(error));
  }

  reloadData(){
      this.covids = this.covidService.getList();
  }

  reloadList(){
    this.listTotal=this.covidService.getfindAllTotal();
  }

  deleteCovid(idCovidCity:number){
      this.covidService.getDelete(idCovidCity).subscribe(data=>{
          console.log(data);
        //   this.reloadData();
          this.covidService.getList().subscribe(data=>{
              console.log(data);
          })
      }, 
      err => console.log(err));
      this.insertList();
  }

  updateCovid(idCovidCity:number){
      this.router.navigate(['/covid-update'], {queryParams: {id : idCovidCity}});
  }

  insertList(){
    this.covidService.getfindAllTotal().subscribe(data=>console.log(data), error=>console.log(error));
  }
  
}
