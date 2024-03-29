import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/core/models/product.model';
import { environment } from './../../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products/`).pipe(catchError(this.handleError));
  } 

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`).pipe(catchError(this.handleError));
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product).pipe(catchError(this.handleError));
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes).pipe(catchError(this.handleError));
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Algo salió mal');
  }
}
