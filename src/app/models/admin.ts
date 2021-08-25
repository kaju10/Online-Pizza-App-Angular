export class Admin {
    mobile: number;
    userName: string;
    password: string;
    userType: string;
    adminAddress: string;

    constructor(mobile: number, userName: string, password: string, userType: string, adminAddress: string){
        this.mobile = mobile;
        this.userName = userName;
        this.password = password;
        this.userType = userType;
        this.adminAddress = adminAddress;
    }
}
