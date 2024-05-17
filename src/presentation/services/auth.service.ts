import { UserModel } from './../../database/mongodb/models/user.model';
import { RegisterUserDto } from './../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { promises } from "dns";
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { UserMaper } from '../../domain/mapers/user.mapers';

export class UserService {
  async create(registeUSer: RegisterUserDto): Promise<UserEntity> {
    const {name , email,password,roles,img}= registeUSer;
    try {
      const exist = await UserModel.findOne({ email });
      if (exist) throw Error("email ya registro");
      const user = await UserModel.create(registeUSer);
      if (!user) throw Error("error_service");
      await user.save();
      return UserMaper.fromEntity(user);
    } catch (error) {
        throw error;
    }
}

async update(LoginUser:LoginUserDto, id:string):Promise<UserEntity>{
  try {
      const User = await UserModel.findByIdAndUpdate({
          id: LoginUser,
          data:{...LoginUser}
      });
      if(!User) throw Error('Error')
      await User.save();
      return UserMaper.fromEntity(User);

  } catch (error) {
      throw error; 
  }
}

 
async delete(id:string):Promise<UserEntity>{
  try {
      const User = await UserModel.findOneAndDelete({id});
      if(!User) throw Error('Error')
      return UserMaper.fromEntity(User);

  } catch (error) {
      throw error; 
  }
}
async findOne(id:string):Promise<UserEntity>{
  try {
      const User = await UserModel.findOne({id});
      if(!User) throw Error('Error')
      return UserMaper.fromEntity(User);

  } catch (error) {
      throw error; 
  }
}
  findAll() {}
}
