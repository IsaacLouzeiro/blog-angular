import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  loveReaction: string = 'bx-heart'
  @Input() creditPhoto: string = 'Photo by Shubham Dhage on Unsplash'
  @Input() contentPhoto: string = 'https://miro.medium.com/v2/resize:fit:720/0*agrh5zAuqtHk41yN'
  @Input() contentTitle: string = 'Blockchain: O que é e como funciona? (Direto ao Ponto)'
  @Input() contentDescription: string = `Blockchain é uma cadeia de dados em blocos que transitam em uma ‘‘rede transparente’’, onde é possível que elementos passem por essa rede descentralizada de uma forma segura e que seja possível visualizar o que está acontecendo em cada transação. Basicamente um banco de dados mais sofisticado que não permite que os dados sejam copiados ou alterados na rede.

Imutabilidade: A Informação que é armazenada nesta rede não pode ser alterada e é permanente, já que para que seja feito alguma alteração será necessário que todos que mantém a rede funcionando estejam de acordo com a mudança. Bem, para ficar claro, essa rede é uma cadeia de blocos de informação conectadas por uma criptografia gerada por vários computadores ao redor do mundo através de mineração.

Mineração: A mineração é um processo de validação de transação na Blockchain. Ela é realizada para fazer a junção dos blocos na rede formando uma cadeia de blocos. Os mineradores são responsáveis por fazerem essa validação na rede.

A validação dessas transações envolve a resolução de um problema matemático complexo que garante a segurança da rede. Quando um minerador consegue resolver esse problema matemático, o bloco é adicionado à Blockchain e o minerador é recompensado com uma quantidade de criptomoedas.

Existem dois tipos principais de mineração em uma blockchain: mineração de prova de trabalho (PoW — Prof of Work em inglês) e mineração por prova de participação (PoS — Prof of Stake em inglês).

Descentralização: Isso mesmo, caso não tenha notado, essa rede não possui alguém para mandar e desmandar, ela é descentralizada e portanto segura e aberta a todos. Por esse motivo, a migração de contratos para essa rede está em crescente, e é chamado de “Contrato Inteligente”. Uma das principais vantagens dos contratos inteligentes é que eles garantem a execução automática e imparcial das condições do contrato, sem a necessidade de confiança humana. Além disso, eles também são seguros, pois são armazenados em uma Blockchain, o que torna difícil alterar ou apagar as condições do contrato.

Imagine só a utilização dessa tecnologia para compras digitais, contratos de negócios, transferência de ativos, votação, entre outras coisas que envolvem uma transação e segurança para que ela aconteça. Com a descentralização, todos nessas transações ganham, pois não há necessidade de interação humana quando o contrato é criado.

Bônus: NFT é a sigla para “Token Não-Fungível”, que é uma forma de representar propriedade digital de algo único e intransferível, como obras de arte, música, vídeos ou jogos. Eles são criados e armazenados em uma Blockchain. Para saber mais sobre NFT acesse aqui o meu post dedicado a esse assunto.
`

  @Input() userImgLink: string = 'https://github.com/isaaclouzeiro.png'
  @Input() username: string = 'Isaac Louzeiro'
  @Input() postdate: string = '28 may 2023'

  constructor() { }

  ngOnInit(): void {
  }

  changeReaction() {
    if(this.loveReaction === 'bx-heart')
      this.loveReaction = 'bxs-heart'
    else
      this.loveReaction = 'bx-heart'
  }

}
