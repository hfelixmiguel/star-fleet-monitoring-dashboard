# Architecture Diagrams

## System Overview

```mermaid
graph TD
    A[Client Browser] --> B[Next.js App]
    B --> C[Ship Components]
    B --> D[Fleet Components]
    B --> E[Accessibility Components]
    C --> F[Ship Card Display]
    D --> G[Fleet Overview]
    E --> H[Screen Reader Support]
    E --> I[Keyboard Navigation]
```

## Component Hierarchy

```mermaid
tree
root: "Star Fleet Dashboard"
  root: "Components"
    Components: "Ship Card"
      ShipCard: "AccessibleShipCard"
      ShipCard: "OptimizedShipStats"
    Components: "Fleet Overview"
      FleetOverview: "OptimizedFleetOverview"
      FleetOverview: "Critical Ships Alert"
      FleetOverview: "Sorted Ships Display"
    Components: "Accessibility"
      Accessibility: "AccessibleNavigation"
      Accessibility: "ScreenReaderAnnouncer"
      Accessibility: "FocusManager"
```

## Data Flow

```mermaid
graph LR
    A[Ship Data] --> B[Component Props]
    B --> C[React State]
    C --> D[Render Cycle]
    D --> E[DOM Updates]
    E --> F[Accessibility APIs]
```
