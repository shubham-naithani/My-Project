import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(
    private route:Router
    ) { }

  ngOnInit(): void {
  }
  home(){
    this.route.navigateByUrl("")
  }
  login(){
    this.route.navigateByUrl("/Login")
  }
  register(){
    this.route.navigateByUrl("/Registeration")
  }
  settings(){
  }

}


