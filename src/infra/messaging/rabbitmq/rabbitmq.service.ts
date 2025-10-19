import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as amqplib from 'amqplib';

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: Awaited<ReturnType<typeof amqplib.connect>>;
  private channel: Awaited<ReturnType<typeof this.connection.createChannel>>;

  async onModuleInit() {
    this.connection = await amqplib.connect(
      process.env.RABBITMQ_URL || 'amqp://localhost',
    );
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue('pix_payments', { durable: true });
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }

  async sendToQueue(queue: string, message: any) {
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  }

  async consume(
    queue: string,
    onMessage: (msg: amqplib.ConsumeMessage) => void,
  ) {
    await this.channel.consume(queue, (msg) => {
      if (msg) {
        onMessage(msg);
        this.channel.ack(msg);
      }
    });
  }
}
