import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ResponseService } from '../../shared/response.service';
import { Response } from "app/shared/response.model";
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  id: number;
  reporterForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private responseService: ResponseService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let name = '';
    this.reporterForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    const response = {...this.reporterForm.value, status: 'PENDING'}
    this.responseService.addResponse(response)
    // this.onCancel();
  }
}


