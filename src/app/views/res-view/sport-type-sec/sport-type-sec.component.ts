import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TypeSportModule} from '../../../modules/typeSport.module';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-sport-type-sec',
  templateUrl: './sport-type-sec.component.html',
  styleUrls: ['./sport-type-sec.component.css']
})
export class SportTypeSecComponent implements OnInit {
  @Output() newSportClickedEvent = new EventEmitter<number>();
  // tslint:disable-next-line:max-line-length
  typeSportList: TypeSportModule[] = [new TypeSportModule(1, 'Dance Oriental'), new TypeSportModule(2, 'Prise de masse'), new TypeSportModule(3, 'Perte du poids'), new TypeSportModule(4, 'Yoga')];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //this.router.navigate(['/reservation/:' + id]);
  sportTypeClick(id: number): void {
    this.newSportClickedEvent.emit(id);

  }

}
