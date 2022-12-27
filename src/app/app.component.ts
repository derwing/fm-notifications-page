import { Component } from '@angular/core';

interface Notifications {
  id: number,
  avatar: string,
  author: String,
  title: String,
  subtitle?: String,
  message?: String,
  time: String,
  read: boolean,
  open: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fm-notifications-page';
  readNotificationNumber: number = 3;
  notifications: Notifications[] = [
    {
      id: 0,
      avatar: 'avatar-mark-webber.webp',
      author: 'Mark Webber',
      title: 'reacted to your recent post',
      subtitle: 'My first tournament today!',
      time: '1m ago',
      read: false,
      open: false
    },
    {
      id: 1,
      avatar: 'avatar-angela-gray.webp',
      author: 'Angela Gray',
      title: 'followed you',
      subtitle: '',
      time: '5m ago',
      read: false,
      open: false
    },
    {
      id: 2,
      avatar: 'avatar-jacob-thompson.webp',
      author: 'Jacob Thompson',
      title: 'has joined your group',
      subtitle: 'Chess Club',
      time: '1 day ago',
      read: false,
      open: false
    },
    {
      id: 3,
      avatar: 'avatar-rizky-hasanuddin.webp',
      author: 'Rizky Hasanuddin',
      title: 'sent you a private message',
      subtitle: '',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days ago',
      read: true,
      open: true
    },
    {
      id: 4,
      avatar: 'avatar-kimberly-smith.webp',
      author: 'Kimberly Smith',
      title: 'commented on your picture',
      subtitle: '',
      time: '1 week ago',
      read: true,
      open: false
    },
    {
      id: 5,
      avatar: 'avatar-nathan-peterson.webp',
      author: 'Nathan Peterson',
      title: 'reacted to your recent post',
      subtitle: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      read: true,
      open: false
    },
    {
      id: 6,
      avatar: 'avatar-anna-kim.webp',
      author: 'Anna Kim',
      title: 'left the group',
      subtitle: 'Chess Club',
      time: '2 weeks ago',
      read: true,
      open: false
    },
  ]

  markAsRed(id?: number) {
    if (id && id >= 0) {
      this.notifications[id].read = true;
      this.notifications[id].open = true;
      this.readNotificationNumber -= 1;
      return;
    }

    this.notifications.forEach(element => {
      if (element.read) {
        this.readNotificationNumber -= 1;
      }
      element.read = true,
        element.open = false

    });



  }



}




