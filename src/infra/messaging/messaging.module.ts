import { SendNotification } from '@application/use-cases/notification/send';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/consumer.service';
import { NotificationsController } from './kafka/controllers/nofitifications.controler';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KafkaConsumerService, SendNotification],
})
export class MessagingModule {}
