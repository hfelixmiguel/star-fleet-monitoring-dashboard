/**
 * Mock data generator for realistic ship scenarios
 */
export const generateMockShips = (count: number): any[] => {
  const statuses = ['operational', 'damaged', 'offline'];
  const classes = ['NCC-1701', 'NX-01', 'NCC-1701D', 'NCC-1701E', 'NCC-68934'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `ship-${i + 1}`,
    name: `USS ${['Enterprise', 'Voyager', 'Defiant', 'Picard', 'Reliant'][i % 5]}`,
    registry: classes[i % classes.length],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    health: {
      hull: Math.floor(Math.random() * 100),
      shields: Math.floor(Math.random() * 100),
      crew: Math.floor(Math.random() * 100)
    },
    coordinates: {
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100
    },
    lastUpdate: new Date().toISOString(),
    class: classes[i % classes.length],
    commissionDate: `20${Math.floor(Math.random() * 30)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 31) + 1).padStart(2, '0')}`
  }));
};

export const generateMockShip = (): any => ({
  id: 'ship-001',
  name: 'USS Enterprise',
  registry: 'NCC-1701',
  status: 'operational',
  health: {
    hull: 95,
    shields: 88,
    crew: 92
  },
  coordinates: { x: 45.2, y: -32.1, z: 10.5 },
  lastUpdate: new Date().toISOString(),
  class: 'NCC-1701',
  commissionDate: '2026-03-06'
});
