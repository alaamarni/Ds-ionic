import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../models/crypto';
import { AlaaService } from '../services/alaa.service';

@Component({
  selector: 'app-xrp',
  templateUrl: './xrp.page.html',
  styleUrls: ['./xrp.page.scss'],
})

  export class XRPPage implements OnInit{
    selectedFiat = 'USD';
    fiats = ['USD', 'EUR', 'GBP', 'JPY'];
    bitcoin$: CryptoCoin;
    constructor(private coinProvider: AlaaService) {}
  
    async ngOnInit(){
      this.changeFiat();
      console.log('bit', this.bitcoin$);
    }
  
    callService(){
      return this.coinProvider.getCoinInfo(this.selectedFiat, 'ripple').toPromise();
    }
  
    async changeFiat(){
      let d = await this.callService();
      this.bitcoin$ = d[0];
    }
    
  
  
  }