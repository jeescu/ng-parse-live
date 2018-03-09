import { Injectable } from '@angular/core';
import { Response } from './response.model';
import { Subject } from "rxjs/Subject";

// I don't know where to put this exactly
import Parse from 'parse'

Parse.initialize("devliveKey");
Parse.serverURL = 'http://localhost:1337/parse';


var OResponse = Parse.Object.extend("Response");
var query = new Parse.Query(OResponse);
let subscription = query.subscribe();

@Injectable()
export class ResponseService {
  responsesChanged = new Subject<Response[]>();
  
  private responses = []

  constructor() {
    this.fetchResponses()
    this.listeners()
  }

  fetchResponses() {
    query.find().then((results) => {
      const responses = results.map((res) => {
        return res.toJSON();
      })

      this.setResponses(responses)
    })
  }

  listeners() {
    subscription.on('update', (response) => {
      this.fetchResponses();
    });

    subscription.on('create', (response) => {
      this.fetchResponses();
    });    
  }

  setResponses(responses: Response[]) {
    this.responses = responses;
    // call API!
    this.responsesChanged.next(this.responses.slice())
  }

  addResponse(resp: Response) {
    const response = new OResponse();

    response.set("name", resp.name);
    response.set("status", resp.status);

    response.save(null, {
      success: function(resp) {
        alert('New object created with objectId: ' + resp.id);

        this.responses.push(response)
        this.responsesChanged.next(this.responses.slice())
      }
    });
  }

  updateResponse(id: string, updatedResponse: Response) {
    const response = new OResponse(updatedResponse);

    response.save(null, {
      success: function(data) {
        this.responses = this.responses.map((resp) => {
          if (resp.id === id) resp = updatedResponse;
          return resp;
        })
        this.responsesChanged.next(this.responses.slice())
      }
    });
  }

  getComputedResponse() {
    const responses = this.responses.slice();
    const fieldResponses = {
      'download': 0,
      'store': 0,
      'mail': 0
    };

    responses.forEach((resp) => {
      if (resp.status == 'PASSED') {
        fieldResponses[resp.name] += 1;
      } 
    });

    return Object.keys(fieldResponses).map((key) => fieldResponses[key]);
  }

  getPendingResponses() {
    console.log('get pending!')
    const responses = this.responses.slice();
    return responses.filter((resp) => resp.status == 'PENDING');
  }


  getResponses() {
    // returns a copy: slice.
    return this.responses.slice();
  }
}