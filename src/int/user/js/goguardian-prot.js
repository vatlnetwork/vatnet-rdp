var notificationPresent = false;

const sendNotification = () => {
  if (notificationPresent) {
    return
  }
  var newElement = document.createElement('div')
  newElement.id = "error-notification"
  newElement.innerHTML = `
    <div
      style="
        position: fixed;
        right: 10;
        bottom: 10;
        width: 350px;
        background-color: red;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      "
      onclick="clearNotification()"
    >
      Warning! 
      An external application may have attempted to close this window! 
      Are you sure you want to close this window? 
      Click cancel if you do not wish to close this window.
    </div>
  `
  document.body.appendChild(newElement)
  notificationPresent = true
  var notifyInterval = setInterval(() => {
    clearNotification()
    clearInterval(notifyInterval)
  }, 10000)
}

const clearNotification = () => {
  if (!notificationPresent) {
    return
  }
  document.getElementById('error-notification').remove()
  notificationPresent = false
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault()
  sendNotification()
  var confirmationMessage = 'Warning! An external application may have attempted to close this window! Are you sure you want to close this window? Click cancel if you do not wish to close this window.'
  event.returnValue = confirmationMessage;
  return confirmationMessage;
})
