export interface ILogApi {
  save(params: any): Promise<any>
}

export class LogApi implements ILogApi {
  async save(params: any) {
    throw new Error('NotYetImplemented');
  }
}
