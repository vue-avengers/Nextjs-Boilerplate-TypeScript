export default class BaseModel {
  constructor() {
    this.createdAt = new Date();
  }

  id!: string;

  createdAt?: Date;

  updatedAt?: Date;

  createdBy!: string;

  updatedBy?: string;

  isDeleted = false;
}
