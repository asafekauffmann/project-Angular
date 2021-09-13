import { Component, OnInit } from '@angular/core';
import { ListService } from './../../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cursos: string[];

  constructor(private listService : ListService) {
    
  this.cursos = this.listService.getCursos();

   }

  ngOnInit(): void {
  }

}
