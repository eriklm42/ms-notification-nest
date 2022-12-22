import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/notification/send';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification';
import { CancelNotification } from '@application/use-cases/notification/cancel';
import { ReadNotification } from '@application/use-cases/notification/read';
import { UnreadNotification } from '@application/use-cases/notification/unread';
import { CountRecipientNotifications } from '@application/use-cases/notification/count-recipient';
import { GetRecipientNotifications } from '@application/use-cases/notification/get-recipient';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countNotification: CountRecipientNotifications,
    private getNotification: GetRecipientNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @Get('count/:recipientId')
  async countFromRecipientId(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotification.execute({ recipientId });

    return { count };
  }

  @Get('/:recipientId')
  async getFromRecipientId(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getNotification.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
