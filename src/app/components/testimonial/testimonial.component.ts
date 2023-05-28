import { Component, OnInit } from '@angular/core';

type Iuser = {
  urlImg: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonialList: string[] = [
    "Untitled has saved us thousands of hours work.",
    "We're able to spin up projects and features faster."
  ]

  user: Iuser = {
    urlImg: 'https://github.com/isaaclouzeiro.png',
    name: 'Isaac Louzeiro',
    role: 'Front-end Developer'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
