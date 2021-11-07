import { LogApi } from '../core';

export class MockLogApi extends LogApi {
  #mock = null;

  constructor() {
    super()
  }

  async save(params) {
    return undefined;
  }
}
