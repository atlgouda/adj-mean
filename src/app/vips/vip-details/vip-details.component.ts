import { Component, Input } from '@angular/core';
import { Vip } from '../vip';
import { VipService } from '../vip.service';

@Component({
  selector: 'vip-details',
  templateUrl: './vip-details.component.html',
  styleUrls: ['./vip-details.component.css']
})

export class VipDetailsComponent {
  @Input()
  vip: Vip;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private vipService: VipService) {}

  createVip(vip: Vip) {
    this.vipService.createVip(vip).then((newVip: Vip) => {
      this.createHandler(newVip);
    });
  }

  updateVip(vip: Vip): void {
    this.vipService.updateVip(vip).then((updatedVip: Vip) => {
      this.updateHandler(updatedVip);
    });
  }

  deleteVip(vipId: String): void {
    this.vipService.deleteVip(vipId).then((deletedVipId: String) => {
      this.deleteHandler(deletedVipId);
    });
  }
}