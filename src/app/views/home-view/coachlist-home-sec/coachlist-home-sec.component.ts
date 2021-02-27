import { Component, OnInit } from '@angular/core';
import {Coach} from '../../../modules/coach.module';

@Component({
  selector: 'app-coachlist-home-sec',
  templateUrl: './coachlist-home-sec.component.html',
  styleUrls: ['./coachlist-home-sec.component.css']
})
export class CoachlistHomeSecComponent implements OnInit {
  CoachList: Coach[] = [
    new Coach(1, 'code', 'Abdelilah', 'Habbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'vdluhpie biuh'),
    new Coach(2, 'code', 'Badreddine', 'Habbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'frbfiyzfgiyerifv'),
    new Coach(3, 'code', 'Oustad', 'Habdeat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'nrgeiurghpizuehvz'),
    new Coach(4, 'code', 'Abdelilah', 'Hadefbbat', 'habbat@gmail.com', 'phone', 'pasword', 'address', '../../assets/images/habbat.jpg', 'vbhrgbpeiruthbiuh'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
