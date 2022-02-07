export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userid: string,
    public readonly price: number,
  ) {}

  toString(): string {
    return `OrderCreatedEvent - orderId: ${this.orderId}, userid: ${this.userid}, price: ${this.price}`;
  }
}
