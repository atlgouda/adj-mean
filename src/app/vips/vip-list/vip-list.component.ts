import { Component, OnInit } from '@angular/core';
import { Vip } from '../vip';
import { VipService } from '../vip.service';
import { VipDetailsComponent } from '../vip-details/vip-details.component';

@Component({
  selector: 'vip-list',
  templateUrl: './vip-list.component.html',
  styleUrls: ['./vip-list.component.css'],
  providers: [VipService]
})

export class VipListComponent implements OnInit {

  vips: Vip[]
  selectedVip: Vip
  isShown: boolean = true ;

  constructor(private vipService: VipService) { }

  ngOnInit() {
     this.vipService
      .getVips()
      .then((vips: Vip[]) => {
        this.vips = vips.map((vip) => {
          return vip;
        });
      });
  }

  private getIndexOfVip = (vipId: String) => {
    return this.vips.findIndex((vip) => {
      return vip._id === vipId;
    });
  }

  


  toggleShow() {
  this.isShown = ! this.isShown;
  }

  showDiv() {
    this.isShown = true
  }

  hideDiv() {
    this.isShown= false
  }

  selectVip(vip: Vip) {
    this.selectedVip = vip
  }

  createNewVip() {
    var vip: Vip = {
      name: '',
      occupation: '',
      detail: '',
      reason: '',
      yt: ''
    };

    // By default, a newly-created vip will have the selected state.
    this.selectVip(vip);
  }

  deleteVip = (vipId: String) => {
    var idx = this.getIndexOfVip(vipId);
    if (idx !== -1) {
      this.vips.splice(idx, 1);
      this.selectVip(null);
    }
    return this.vips;
  }

  addVip = (vip: Vip) => {
    this.vips.push(vip);
    this.selectVip(vip);
    return this.vips;
  }

  updateVip = (vip: Vip) => {
    var idx = this.getIndexOfVip(vip._id);
    if (idx !== -1) {
      this.vips[idx] = vip;
      this.selectVip(vip);
    }
    return this.vips;
  }
}