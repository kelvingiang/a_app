export class Member {
  private _id: number;
  private _name: string;
  private _member_id: string;
  private _address: string;
  private _email: string;
  private _status: number;

  constructor(
    id: number,
    member_id: string,
    name: string,
    address: string,
    email: string,
    status: number
  ) {
    this.id = id;
    this.member_id = member_id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.status = status;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get member_id(): string {
    return this._member_id;
  }

  public set member_id(value: string) {
    this._member_id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get status(): number {
    return this._status;
  }

  public set status(value: number) {
    this._status = value;
  }
}
