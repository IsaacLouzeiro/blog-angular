import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() imglink: string = ''
  @Input() userlink: string = '#'
  @Input() username: string = ''
  @Input() postdate: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
