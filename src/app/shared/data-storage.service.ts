import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ResponseService } from "app/shared/response.service";
import 'rxjs/Rx';
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private responseService: ResponseService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    // return this.http.put('https://ng-recipes-bdc7c.firebaseio.com/recipes.json?auth='+token, this.responseService.getResponses())
  }
}