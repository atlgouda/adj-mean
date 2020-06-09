import { Injectable } from '@angular/core';
import { Vip } from './vip';
import { Http, Response } from '@angular/http';

@Injectable()
export class VipService {
    private vipsUrl = '/api/vips';

    constructor (private http: Http) {}

    // get("/api/vips")
    getVips(): Promise<void | Vip[]> {
      return this.http.get(this.vipsUrl)
                 .toPromise()
                 .then(response => response.json() as Vip[])
                 .catch(this.handleError);
    }

    // post("/api/vips")
    createVip(newVip: Vip): Promise<void | Vip> {
      return this.http.post(this.vipsUrl, newVip)
                 .toPromise()
                 .then(response => response.json() as Vip)
                 .catch(this.handleError);
    }

    // get("/api/vips/:id") endpoint not used by Angular app

    // delete("/api/vips/:id")
    deleteVip(delVipId: String): Promise<void | String> {
      return this.http.delete(this.vipsUrl + '/' + delVipId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/vips/:id")
    updateVip(putVip: Vip): Promise<void | Vip> {
      var putUrl = this.vipsUrl + '/' + putVip._id;
      return this.http.put(putUrl, putVip)
                 .toPromise()
                 .then(response => response.json() as Vip)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}