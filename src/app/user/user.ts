export interface IUser {
    //Server Generated
    id?: number;
    clientId?: string;
    userId?: string;
    recCrtTs?: Date;
    recCrtUsrKy?: string;
    recLstUpdtTs?: Date;
    recLstUpdtKy?: string;
    activeInd?: string;

    //User Provided
    firstname: string;
    lastname: string;
    gender: string;
    email: string;
    dob: string;
    height: string;
    complexion: string;
    education: string;
    occupation: string;
    maritalstatus: string;
    paternalGotram: string;
    maternalGotram: string;
    star: string;
    rasi: string;
    aboutSelf: string;
    salary: string;
    mobileno: string;
    address: string;
    longitude: string;
    latitude: string;
    photoLink: string;
    videoLink: string;    
}