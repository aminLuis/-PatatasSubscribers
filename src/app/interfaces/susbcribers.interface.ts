export interface Alldata {
    Count: number;
    Data:  Susbcriber[];
}

export interface Susbcriber {
    SystemId:                     null;
    Area:                         string;
    PublicId:                     number;
    CountryCode:                  string;
    CountryName:                  string;
    Name:                         string;
    EndpointsCount:               number;
    Email:                        string;
    JobTitle:                     JobTitle;
    PhoneNumber:                  string;
    PhoneCode:                    string;
    PhoneCodeAndNumber:           string;
    LastActivityUtc:              null;
    LastActivity:                 null;
    LastActivityString:           null;
    SubscriptionDate:             null;
    SubscriptionMethod:           number;
    SubscriptionState:            number;
    SubscriptionStateDescription: string;
    Topics:                       string[];
    ValidEmail:                   boolean;
    Activity:                     Activity;
    ConnectionState:              number;
    Id:                           number;
}

export enum Activity {
    Empty = "--",
}

export enum JobTitle {
    Dev = "Dev",
    Developer = "Developer",
    Empty = "",
}