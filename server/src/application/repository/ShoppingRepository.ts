import { Shopping } from "../../domain/entity";
import { Repository } from "../repository";

export interface ShoppingRepository extends Repository {
    findAll (): Promise<Shopping[]>;
    findById (id: string): Promise<Shopping | null>;
}
