import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ResponseService } from "app/shared/response.service";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private responseService: ResponseService) {}
  storeRecipes() {
    // return this.http.put('https://ng-recipes-bdc7c.firebaseio.com/recipes.json?auth='+token, this.responseService.getResponses())
  }
}