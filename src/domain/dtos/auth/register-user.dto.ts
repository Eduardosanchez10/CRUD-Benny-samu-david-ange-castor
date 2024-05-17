export class RegisterUserDto{

    constructor(
        public name:string,
        public email:string,
        public password:string,
        public roles:string[],
        public img:string,
    ){}

    static create( body: {[key:string]:any} ):[string?, RegisterUserDto?]{

        const { name,email,password,roles,img } = body;
        if( !name ) return ["Missing name", undefined];
        if (!email) return ["Missing email",undefined];
        if (!password) return ["Missing password",undefined];
        if (!roles) return ["Missing roles",undefined];
        if (!img) return ["Missing img",undefined];

        return [undefined, new RegisterUserDto(name,email,password,roles,img)];
    }

}