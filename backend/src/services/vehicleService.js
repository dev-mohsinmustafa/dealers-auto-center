const vehicleRepository = require('../repositories/vehicleRepository');

class VehicleService {
  async getVehicles(searchQuery = '', sortBy = '', order = 'asc') {
    let vehicles = await vehicleRepository.getAll();

    // Filtering logic
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      vehicles = vehicles.filter((v) => v.name.toLowerCase().includes(lowerQuery));
    }

    // Sorting logic
    if (sortBy) {
      vehicles.sort((a, b) => {
        let valA = a[sortBy];
        let valB = b[sortBy];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return order === 'asc' ? -1 : 1;
        if (valA > valB) return order === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return vehicles;
  }
}

module.exports = new VehicleService();
