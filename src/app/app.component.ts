import { Component, OnInit } from '@angular/core';
import { objetoLivro } from './shared/model/objetoLivro.model';
import { LivrosService } from './shared/service/livros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  Livros: objetoLivro[];

  constructor(
    public LivrosService: LivrosService
  ) { }

  ngOnInit(): void {
    this.getLivos();
  }

  getLivos(){
    this.LivrosService.getLivrosWhithFlag().subscribe(data => {

      this.Livros = data;

        console.log( 'this.Livros ', this.Livros  );

    });
  }


  title = 'biblioteca';

  nomeDoLivro: string;
  autor: string;
  edicao: number;
  linkCapa: any;
  data: Date;
  resumo: Text;

 /*  livro = [
    {nomeDoLivro: this.nomeDoLivro},
    {autor: this.autor},
    {edicao: this.edicao},
    {linkCapa: this.linkCapa},
    {data: this.data},
    {resumo: this.resumo}
  ]; */

  livro = [];

  listaLivro: any[] = [];

  salvarNovoLivro(){
    /* console.log(this.listaLivro); */
    console.log(this.listaLivro);
    this.livro.push(this.livro =[{nomeDoLivro: this.nomeDoLivro}, {autor: this.autor}, {edicao: this.edicao}, {linkCapa: this.linkCapa}]);
    this.listaLivro.push(this.listaLivro);
    this.limparCampos();
  }

  limparCampos() {
    this.nomeDoLivro = "";
    this.autor = "";
    this.edicao = null;
    this.linkCapa = "";
    this.data = null;
    this.resumo = null;
  }


}
