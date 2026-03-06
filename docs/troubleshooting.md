# Troubleshooting Guide for Starfleet Fleet Monitoring Dashboard

## Common Issues and Solutions

### WebSocket Connection Issues
```typescript
// Check connection status
const { connected, lastPing } = useWebSocket('wss://starfleet-api.com/ships');
if (!connected) {
  console.log('Connection lost. Attempting to reconnect...');
}
```

### Performance Issues
```typescript
// Optimize bundle size
import { useMemo } from 'react';
const optimizedData = useMemo(() => {
  return data.map(item => ({ id: item.id, name: item.name }));
}, [data]);
```
