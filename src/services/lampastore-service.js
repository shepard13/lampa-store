export default class lampastoreService {
  data = [
    {
      id: 4,
      lampImg:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Techno TL LED',
      manufacturer: 'Italy',
      price: 9.99,
    },
    {
      id: 4,
      lampImg:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Techno TL LED',
      manufacturer: 'Italy',
      price: 9.99,
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
