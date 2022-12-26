import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notitifications',
        brokers: ['natural-raptor-8312-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bmF0dXJhbC1yYXB0b3ItODMxMiTpV-9UFxXRfJf4SutW5iDX9K3TPKhEWczLLkQ',
          password: '9de2afba5e444deda508dd3fcf599f6a',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
