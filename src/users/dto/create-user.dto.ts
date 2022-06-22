import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'nameは文字列を指定してください。',
  })
  readonly name: string;

  @IsEmail(undefined, {
    message: 'emailはEメールの形式になった文字列である必要があります。',
  })
  readonly email: string;

  @IsString({
    message: 'passwordは文字列を指定してください。',
  })
  @MinLength(6, {
    message: 'passwordは6文字以上である必要があります。',
  })
  readonly password: string;
}
