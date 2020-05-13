# Level 08: Does this code compile?

## Structural vs nominal type system

```typescript
class SendEmailRunnable {
  run() {
    console.log("Sending Email");
  }
}

class SendSmsRunnable {
  run() {
    console.log("Sending SMS");
  }
}

function sendEmail(sendEmailRunnable: SendEmailRunnable) {
  sendEmailRunnable.run();
}

const sendEmailRunnable = new SendEmailRunnable();
const sendSmsRunnable = new SendSmsRunnable();

sendEmail(sendSmsRunnable);
```
