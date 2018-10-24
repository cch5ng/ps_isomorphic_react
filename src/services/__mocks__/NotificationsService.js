// mock file
let count = 0;

export default {
  __setCount(_count) {
    count = _count;
  },
  async getNotifications() {
    console.warn('MOCK NOTIFICATIONS SERVICE!')
    return { count }
  }
}
