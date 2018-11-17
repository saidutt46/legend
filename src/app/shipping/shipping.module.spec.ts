import { ShippingModule } from './shipping.module';

describe('ShippingModule', () => {
  let shippingModule: ShippingModule;

  beforeEach(() => {
    shippingModule = new ShippingModule();
  });

  it('should create an instance', () => {
    expect(shippingModule).toBeTruthy();
  });
});
