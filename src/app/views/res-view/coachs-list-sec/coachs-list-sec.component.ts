import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Coach} from '../../../modules/coach.module';

@Component({
  selector: 'app-coachs-list-sec',
  templateUrl: './coachs-list-sec.component.html',
  styleUrls: ['./coachs-list-sec.component.css']
})
export class CoachsListSecComponent implements OnInit {
  @Output() newCoachClickedEvent = new EventEmitter<number>();
  CoachList: Coach[] = [
    new Coach(1, 'code', 'Abdelilah', 'Habbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'vdluhpie biuh'),
    new Coach(2, 'code', 'Badreddine', 'Habbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'frbfiyzfgiyerifv'),
    new Coach(3, 'code', 'Oustad', 'Habdeat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'nrgeiurghpizuehvz'),
    new Coach(4, 'code', 'Abdelilah', 'Hadefbbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'vbhrgbpeiruthbiuh'),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  coachClicked(sportId: number): void {
    this.newCoachClickedEvent.emit(sportId);

  }

}
