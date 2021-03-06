import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { CHECK_TYPE } from '../constant';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  num: any = null;
  checkType: number;
  result: boolean = false;

  constructor(private checkService: CheckService) { }

  ngOnInit(): void {
    this.checkType = CHECK_TYPE.isPrime;
  }

  onChangeNum() {
    if (this.isNotEmpty()) {
      this.num = this.checkService.roundToInt(this.num);
    }
    this.onChangeCheckType();
  }

  onChangeCheckType() {
    if (this.isNotEmpty()) {
      this.result = this.checkService.checkResult(this.num, this.checkType);
    }
  }

  isNotEmpty() {
    return (this.num != null && this.num != '');
  }

}
