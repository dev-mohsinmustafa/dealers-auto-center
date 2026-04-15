const vehicleRepository = require('../repositories/vehicleRepository');

class VehicleService {
  async getVehicles(searchQuery = '', sortBy = '', order = 'asc', page = 1, limit = 6) {
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

    const totalCount = vehicles.length;
    const totalPages = Math.ceil(totalCount / limit) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      items: vehicles.slice(startIndex, endIndex),
      totalCount,
      totalPages,
      currentPage: page
    };
  }
}

module.exports = new VehicleService();
