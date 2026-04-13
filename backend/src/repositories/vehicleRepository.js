// Mock Database for Vehicles
const vehicles = [
  { id: 1, name: 'Toyota Camry 2023', price: 25000, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Honda Civic 2022', price: 22000, image: 'https://images.unsplash.com/photo-1590362891991-f766f5f764bc?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Ford Mustang GT', price: 45000, image: 'https://images.unsplash.com/photo-1584345604476-8f5e305e9d9e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Tesla Model 3', price: 40000, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Chevrolet Corvette', price: 65000, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'BMW M3', price: 72000, image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Audi R8', price: 145000, image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=600' },
  { id: 8, name: 'Porsche 911', price: 105000, image: 'https://images.unsplash.com/photo-1503376713356-1a1a7badddfa?auto=format&fit=crop&q=80&w=600' },
  { id: 9, name: 'Mercedes-Benz C-Class', price: 43000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600' },
  { id: 10, name: 'Lexus RX', price: 50000, image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=600' },
  { id: 11, name: 'Nissan GT-R', price: 115000, image: 'https://images.unsplash.com/photo-1625907406437-0ea8762fbea1?auto=format&fit=crop&q=80&w=600' },
  { id: 12, name: 'Jeep Wrangler', price: 35000, image: 'https://images.unsplash.com/photo-1558509370-d812bd15d482?auto=format&fit=crop&q=80&w=600' },
];

class VehicleRepository {
  async getAll() {
    // Simulating async DB call
    return Promise.resolve([...vehicles]);
  }
}

module.exports = new VehicleRepository();
