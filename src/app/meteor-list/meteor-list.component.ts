import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteor-list',
  templateUrl: './meteor-list.component.html',
  styleUrls: ['./meteor-list.component.css']
})
export class MeteorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);

  }

  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Id', field: 'id' },
    { headerName: 'Name Type', field: 'nametype' },
    { headerName: 'Rec Class', field: 'recclass' },
    { headerName: 'Mass(g)', field: 'mass' },
    { headerName: 'Fall', field: 'fall' },
    { headerName: 'Year', field: 'year' },
    { headerName: 'Latitude', field: 'reclat' },
    { headerName: 'Longitude', field: 'reclong' }

  ];

  rowData = [];


}
