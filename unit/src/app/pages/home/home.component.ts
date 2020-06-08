import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/interface/category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataSource = new MatTableDataSource()

  constructor(private apiService: APIService) {
    this.apiService.get('category').subscribe((data: Category[]) =>  this.dataSource.data = data )
  }
}