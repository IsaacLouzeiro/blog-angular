import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit {
  @Input() Id: string = '0'
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
