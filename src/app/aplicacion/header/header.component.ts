import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active:string = "";

  constructor(location:Location,) { 

      if(location.path() === "/vistaCarta"){
        this.active = "ngb-nav-0";
      }
      else if(location.path() === "/vistaLista"){
        this.active = "ngb-nav-1";
      }
      
      else if(location.path() === ""){
        this.active = "ngb-nav-2"
      }

  }

  ngOnInit(): void {
  }

}
