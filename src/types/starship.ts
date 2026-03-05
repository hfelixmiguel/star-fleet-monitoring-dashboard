export interface Starship {
  id: string;
  name: string;
  registry: string;
  status: 'operational' | 'maintenance' | 'critical' | 'decommissioned';
  class: string;
  coordinates: { x: number; y: number; z: number };
  health: { hull: number; shields: number; crew: number };
  lastUpdate: string;
}
