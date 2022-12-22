import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/notification/send';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CountRecipientNotifications } from '@application/use-cases/notification/count-recipient';
import { ReadNotification } from '@application/use-cases/notification/read';
import { UnreadNotification } from '@application/use-cases/notification/unread';
import { GetRecipientNotifications } from '@application/use-cases/notification/get-recipient';
import { CancelNotification } from '@application/use-cases/notification/cancel';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
    CancelNotification,
  ],
})
export class HttpModule {}
