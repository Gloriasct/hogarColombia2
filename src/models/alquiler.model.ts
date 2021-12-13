import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Alquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoInmueble: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
  })
  observaciones?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicial: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaFinal: string;

  @property({
    type: 'string',
    required: true,
  })
  idInmueble: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
