import { CollectionCoffe } from './collectionCoffe.model';

export interface Employee {
  id: string;
  firstName: string;

  lastName: string;

  phone: string;

  idCard: string;

  date: Date;

  collectionCoffe: CollectionCoffe;
}
