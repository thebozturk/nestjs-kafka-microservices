export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userid: string,
    public readonly price: number,
  ) {}
}
