export interface Susbcribers {
    Subscribers: Subscriber_[];
}

export interface Subscriber_ {
    Name:        string;
    Email:       string;
    CountryCode: string;
    PhoneNumber: string;
    JobTitle:    string;
    Area:        string;
    Topics:      any[];
}