import { Starship } from '@/types';

export const mockStarships: Starship[] = [
  {
    id: '1',
    name: 'USS Enterprise',
    registry: 'NCC-1701',
    status: 'operational',
    class: 'Constitution',
    coordinates: { x: 100, y: 50, z: 25 },
    health: { hull: 100, shields: 100, crew: 430 },
    lastUpdate: '2026-03-05T12:00:00Z'
  },
  {
    id: '2',
    name: 'USS Voyager',
    registry: 'NCC-74656',
    status: 'operational',
    class: 'Intrepid',
    coordinates: { x: -50, y: 200, z: 10 },
    health: { hull: 85, shields: 92, crew: 141 },
    lastUpdate: '2026-03-05T11:45:00Z'
  },
  {
    id: '3',
    name: 'USS Defiant',
    registry: 'NX-74205',
    status: 'maintenance',
    class: 'Defiant',
    coordinates: { x: 0, y: 0, z: 0 },
    health: { hull: 60, shields: 45, crew: 50 },
    lastUpdate: '2026-03-05T10:30:00Z'
  },
  {
    id: '4',
    name: 'USS Discovery',
    registry: 'NCC-1031',
    status: 'operational',
    class: 'Crossfield',
    coordinates: { x: 75, y: -30, z: 100 },
    health: { hull: 95, shields: 88, crew: 128 },
    lastUpdate: '2026-03-05T12:15:00Z'
  },
  {
    id: '5',
    name: 'USS Romulus',
    registry: 'NSC-25',
    status: 'critical',
    class: 'Dderidex',
    coordinates: { x: -200, y: 150, z: -50 },
    health: { hull: 25, shields: 10, crew: 1000 },
    lastUpdate: '2026-03-05T12:20:00Z'
  }
];
