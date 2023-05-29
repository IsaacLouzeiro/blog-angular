import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  loveReaction: string = 'bx-heart'
  @Input() creditPhoto: string = ''
  @Input() contentPhoto: string = ''
  @Input() contentTitle: string = ''
  @Input() contentDescription: string = ''

  @Input() userImgLink: string = ''
  @Input() username: string = ''
  @Input() postdate: string = ''

  private id: string | null = '0'

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentPhoto = result.photo
    this.creditPhoto = result.credit_photo
    this.username = result.author
    this.userImgLink = result.author_img
    this.postdate = result.date
  }

  changeReaction() {
    if(this.loveReaction === 'bx-heart')
      this.loveReaction = 'bxs-heart'
    else
      this.loveReaction = 'bx-heart'
  }

}
