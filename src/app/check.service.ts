import { Injectable } from '@angular/core';
import { CHECK_TYPE } from './constant';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  roundToInt(num: number | null) {
    if (num != null) {
      if (num < 0) {
        return 1;
      }
      return Math.round(num);
    }
    return null;
  }

  checkResult(num: number, checkType: number) {
    if (checkType == CHECK_TYPE.isPrime) {
      if (num > 1) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      return false;
    } else if (checkType == CHECK_TYPE.isFibonacci) {
      // (5*n2 + 4) or (5*n2 – 4)
      const n1 = 5 * Math.pow(num, 2) + 4;
      const n2 = 5 * Math.pow(num, 2) - 4;

      return this.checkPerfectSqr(n1) || this.checkPerfectSqr(n2);
    }
  }


  checkPerfectSqr(num: number) {
    const sqr = Math.floor(Math.sqrt(num));
    return sqr * sqr === num;
  }
}
