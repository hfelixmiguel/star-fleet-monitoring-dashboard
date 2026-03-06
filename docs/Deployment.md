# Deployment Guide

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- Git for version control

## Environment Setup

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Deployment

#### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project on Vercel
3. Deploy automatically via CI/CD

```bash
vercel --prod
```

#### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

Run container:
```bash
docker build -t star-fleet-dashboard .
docker run -p 3000:3000 star-fleet-dashboard
```

#### Kubernetes Deployment

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: star-fleet-dashboard
spec:
  containers:
  - name: dashboard
    image: star-fleet-dashboard
    ports:
    - containerPort: 3000
```

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.starfleet.com
NEXT_PUBLIC_ENV=production
```

## Performance Optimization

### Build Optimizations

```json
{
  "build": {
    "minimize": true,
    "analyzeBundle": false
  }
}
```

### Runtime Configuration

```typescript
// next.config.js
module.exports = {
  images: {
    deviceSizes: [640, 750, 1080],
    imageFormats: ['avif', 'webp']
  },
  swapper: true,
  experimental: {
    optimizePackageImports: true
  }
};
```
