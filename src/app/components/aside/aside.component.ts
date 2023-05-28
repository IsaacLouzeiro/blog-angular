import { Component, OnInit } from '@angular/core';

type Ilist = {
  name: string;
  target: string;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  themeList: Ilist[] = [
    {
      name: 'View All',
      target: 'active'
    },
    {
      name: 'Design',
      target: 'inactive'
    },
    {
      name: 'Product',
      target: 'inactive'
    },
    {
      name: 'Software Engineering',
      target: 'inactive'
    },
    {
      name: 'Customer Success',
      target: 'inactive'
    },
    {
      name: 'Leadership',
      target: 'inactive'
    },
    {
      name: 'Management',
      target: 'inactive'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  turnActive(i: number, name: string, target: string) {
    for(let i = 0; i < this.themeList.length; i++) {
      this.themeList[i].target = 'inactive'
    }

    this.themeList[i].target = 'active'
  }

}
