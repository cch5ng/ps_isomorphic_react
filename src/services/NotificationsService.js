import { delay } from 'redux-saga';
export default {
  async getNotifications() {
    console.warn('REAL NOTIFICATIONS SERVICE! CONTACTING API!')
    await delay(1000)
    return { count: 42 }
  }
}
