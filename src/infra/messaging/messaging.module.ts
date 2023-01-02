import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/consumer.service';
import { NotificationsController } from './kafka/controllers/nofitifications.controler';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
