export class Customer {
    mobile: number;
    userName: string;
    password: string;
    userType: string;
    customerName: string;
    customerEmail: string;
    customerAddress: string;

    constructor(mobile: number,userName: string,password: string,userType: string,customerName: string,customerEmail: string,customerAddress: string){
        this.mobile=mobile;
        this.userName=userName;
        this.password= password;
        this.userType=userType;
        this.customerName=customerName;
        this.customerEmail=customerEmail;
        this.customerAddress=customerAddress; 
    }
}
