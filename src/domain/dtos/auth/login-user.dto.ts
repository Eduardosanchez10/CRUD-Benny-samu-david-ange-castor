
export class LoginUserDto{

    constructor(
        public email:string,
        public password:string,
      
    ){}

    static create( body: {[key:string]:any} ):[string?, LoginUserDto?]{

        const { email,password} = body;
        if (!email) return ["Missing email",undefined];
        if (!password) return ["Missing password",undefined];

        return [undefined, new LoginUserDto(email,password,)];
    }

}