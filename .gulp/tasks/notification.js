const notifier = require('node-notifier');

module.exports = {
  default: (title, message, icon) => {
    let newIcon = icon;

    if (typeof newIcon === 'undefined') {
      newIcon = './.gulp/tasks/notifications/happy.png';
    } else {
      newIcon = './.gulp/tasks/notifications/sad.png';
    }

    notifier.notify({
      title: title,
      message: message,
      icon: newIcon,
      sound: false,
      contentImage: './.gulp/tasks/notifications/centerImage.jpg'
    });
  }
};
