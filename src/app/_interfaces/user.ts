export interface IUser {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    role: string;
    mealTray: string;
    booked: string[];
    participations: string[];
    surname: string;
    lastname: string;
    address: string;
    card: string;
    isStudent: boolean;
    dateSubscription: Date;
    hasPaid: boolean;
    dateLastPayment: Date;
    dateEndSubscription: Date;
    dateRenewal: Date;
}
