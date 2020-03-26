export class User {
  public id?: string;
  public first_name: string;
  public last_name: string;
  public date_of_birth: string;
  public zip_code: string;
  public username: string;
  public email: string;
  public phone: string;
  public otp: string;
  public password?: string;
  public access_token?: string;

  constructor(user: User) {
    Object.assign(this, user);
  }
}
