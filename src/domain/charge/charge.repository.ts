import { Charge } from './charge.entity';

export interface IChargeRepository {
  create(charge: Partial<Charge>): Promise<Charge>;
  getById(id: string): Promise<Charge | null>;
}
