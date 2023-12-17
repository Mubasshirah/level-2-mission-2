import { Schema, model, connect } from 'mongoose';
export type Gurdian={
    fatherName:string;
    fatherOccupation:string;
    fatherContactNo:string;
    motherName:string;
    motherOccupation:string;
    motherContactNo:string;
}
export type UserName={

        firstName:string;
        middleName:string;
        lastName:string
    
}
export type LocalGurdian={
    name:string;
    contactNo:string;
    address:string;
    occupation:string
}
export type Students= {
    id:string;
    name:UserName; 
    email: string;
    gender:"male"|"female"; //template literal or(|)
    dateOfBirth:string;
    contactNo:string;
    emergencyContactNo:string;
    bloodGroup?:'A+'|'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-';
    presentAddress:string;
    permanentAddress:string;
    gurdian:Gurdian;
    localGurdian:LocalGurdian;
    profileImg ?:string;
    isActive:'active'|'inactive'


  }
  