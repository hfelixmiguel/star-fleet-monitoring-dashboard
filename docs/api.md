# Starfleet Fleet Monitoring Dashboard API Documentation

## Overview
This API provides real-time monitoring of starship status, coordinates, and health metrics.

## Endpoints

### GET /ships
Retrieve all starships with their current status.

**Response:**
```json
{
  "id": "ship-1",
  "name": "USS Enterprise",
  "status": "active",
  "coordinates": {"x": 0, "y": 0},
  "health": 95
}
```

### GET /ships/{id}
Retrieve a specific starship by ID.

**Response:** Same as above.
