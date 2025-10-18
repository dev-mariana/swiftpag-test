import { Charge } from './charge.entity';

export interface IChargeRepository {
  create(charge: Charge): Promise<Charge>;
  getById(id: string): Promise<Charge | null>;
}
