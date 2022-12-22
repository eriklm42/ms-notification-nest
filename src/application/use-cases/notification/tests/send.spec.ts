import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications';
import { SendNotification } from '../send';
import { Notification } from '../../../entities/notification/notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Nova notificação!',
      category: 'friendly',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
