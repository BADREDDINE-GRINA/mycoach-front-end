import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-res-view',
  templateUrl: './res-view.component.html',
  styleUrls: ['./res-view.component.css']
})


export class ResViewComponent implements OnInit {
  static typeSport = 1;
  static coachId = 1;
  constructor(private route: Router) { }

  ngOnInit(): void {}
  updateSport(sportId: number): void{
    ResViewComponent.typeSport = sportId;
  }
  updateCoach(coachId: number): void{
    ResViewComponent.coachId = coachId;
  }
  reserver(): void {
    this.route.navigate(['/reservation', ResViewComponent.typeSport , ResViewComponent.coachId ]);
  }

}
