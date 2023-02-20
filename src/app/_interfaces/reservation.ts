export interface IReservation {
    product: string;
    space: string;
    userOn: string;
    day: string;
    start: number;
    end: number;
    isBooked: boolean;
}

export class Reservation implements IReservation {
    product: string;
    space: string;
    userOn: string;
    day: string;
    start: number;
    end: number;
    isBooked: boolean;

    constructor(product: string, space: string, userOn: string, day: string, start: number, end: number, isBooked: boolean) {
        this.product = product;
        this.space = space;
        this.userOn = userOn;
        this.day = day;
        this.start = start;
        this.end = end;
        this.isBooked = isBooked;
    }

    static fromJSON(json: IReservation): Reservation {
        const reservation = Object.create(Reservation.prototype);
        return Object.assign(reservation, json);
    }
}
