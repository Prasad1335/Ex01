

import { Component } from "@angular/core";


@Component({
    selector: 'first-component',
    templateUrl: './component1.html'
})

export class Component1 {
     name = "wai technology";

     
    // addr: Address = new Address();

    // SetCity(event:any){
    //    console.log(event);
    //    this.addr.city=event.target.value;
    // }

    // SetPin(event:any){
    //     console.log(event);
    //     this.addr.pin=event.target.value;
       
    //  }

    //  SetCountry(event:any){
    //     console.log(event);
    //     this.addr.country=event.target.value;
    //  }


    //  declare array
    names:Array<string>=['praad','sonali','tejas',];

    ad1:Address=new Address("ngr",124,"india");
    ad2:Address=new Address("ngr",124,"india");
    ad3:Address=new Address("ngr",124,"india");
    ad4:Address=new Address("ngr",124,"india");
    ad5:Address=new Address("ngr",124,"india");
    
    addrs:Array<Address>=[this.ad1,this.ad2,this.ad3,this.ad4,this.ad5];

}

class Address {

    constructor(private _city: string, private _pin: number, private _country: string) { }

    // private _city!:string;
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    // private _pin!:number;
    public get pin(): number {
        return this._pin;
    }
    public set pin(value: number) {
        this._pin = value;
    }

    // private _country!:string;
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    
}




