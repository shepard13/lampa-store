export default class lampastoreService {
  data = [
    {
      id: 1,
      lampImg:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Techno 1',
      manufacturer: 'Italy',
      price: 9,
    },
    {
      id: 2,
      lampImg:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Techno 2',
      manufacturer: 'Italy',
      price: 20,
    },
  ];

  getLamps() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
