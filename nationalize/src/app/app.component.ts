import { Component, OnInit } from '@angular/core';
import { NationalizeService } from './nationalize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private nationalizeService: NationalizeService) { }

  name: any;
  response: any;

  ngOnInit(): void {
  }

  public search() {
    this.nationalizeService.getNationalizes(this.name).subscribe((res: any) => {
      this.response = res;
    })
  }

}
