export class Activity{

    name: string;
    place: string;
    time: string;
    type : string
    constructor(_name: string,_place:string,_time:string,_type :string) {
        this.name=_name;
        this.place = _place;
        this.time =_time;        
        this.type =_type;
    }
}