import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LivrosService {

  apiUrl = 'https://home.adaptei.com.br/biblioteca/api/livro?isDisponivelParaEmprestimo=true';

  httpOptions = {
    headers: new HttpHeaders ({
      'xAuthorization': '3DF53382-6595-4ED8-AAD5-B41EFCFD0164'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivrosWhithFlag(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl, this.httpOptions);
  }
}
