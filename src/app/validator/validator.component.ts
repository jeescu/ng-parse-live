import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../shared/response.service';
import { Response } from '../shared/response.model';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})

export class ValidatorComponent implements OnInit {
  public reportResponses: Response[];

  constructor(public responseService: ResponseService) { }

  ngOnInit() {
    this.reportResponses = this.responseService.getPendingResponses();

    this.responseService.responsesChanged.subscribe((responses: Response[]) => {
      this.reportResponses = this.responseService.getPendingResponses();
      console.log(this.reportResponses)
    })
  }

  ignoreResponse(res) {
    res.status = 'FAILED';
    this.responseService.updateResponse(res.id, res);
  }

  approveResponse(res) {
    res.status = 'PASSED';
    this.responseService.updateResponse(res.id, res);
  }
}
