// Mock Database for Vehicles
const vehicles = [
  { id: 1, name: 'Toyota Camry 2023', price: 25000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=101' },
  { id: 2, name: 'Honda Civic 2022', price: 22000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=102' },
  { id: 3, name: 'Ford Mustang GT', price: 45000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=103' },
  { id: 4, name: 'Tesla Model 3', price: 40000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=104' },
  { id: 5, name: 'Chevrolet Corvette', price: 65000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=105' },
  { id: 6, name: 'BMW M3', price: 72000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=106' },
  { id: 7, name: 'Audi R8', price: 145000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=107' },
  { id: 8, name: 'Porsche 911', price: 105000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=108' },
  { id: 9, name: 'Mercedes-Benz C-Class', price: 43000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=109' },
  { id: 10, name: 'Lexus RX', price: 50000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=110' },
  { id: 11, name: 'Nissan GT-R', price: 115000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=111' },
  { id: 12, name: 'Jeep Wrangler', price: 35000, image: 'https://loremflickr.com/600/400/cars,supercar?lock=112' },
];

class VehicleRepository {
  async getAll() {
    // Simulating async DB call
    return Promise.resolve([...vehicles]);
  }
}

module.exports = new VehicleRepository();
