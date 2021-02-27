export class Coach{
  public id: number ;
  public code: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public password: string;
  public address: string;
  public image: string;
  public description: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, code: string, firstName: string, lastName: string, email: string, phoneNumber: string, password: string, address: string, image: string, description: string) {
    this.id = id;
    this.code = code;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.address = address;
    this.image = image;
    this.description = description;
  }
}
