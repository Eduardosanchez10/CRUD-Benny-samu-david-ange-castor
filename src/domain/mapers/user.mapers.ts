import { UserEntity } from './../entities/user.entity';
import { errorMonitor } from "events";

export class UserMaper{
static fromEntity(object:{[key:string]:any}):UserEntity{

    const{name,email,password,roles,img}=object;
    if (!name) throw Error('error');
    if (!email) throw Error('email estupido');
    if (!password) throw Error('papa esa no es la password');
    if (!img) throw Error('papa se que eres feo pero subi una foto njd');


    return new UserEntity(name,email,password,roles,img)

}

}