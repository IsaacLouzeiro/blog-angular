import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Input() creditPhoto: string = ''
  @Input() photoCover: string = ''
  @Input() cardTitle: string = ''
  @Input() cardDescription: string = ''

  @Input() userImgLink: string = ''
  @Input() username: string = ''
  @Input() postdate: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
