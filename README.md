# Starfleet Fleet Monitoring Dashboard 🚀

A responsive web application using TypeScript and Next.js to monitor the status, coordinates, and health of starships across the fleet.

![Starship Dashboard](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Real-time Monitoring**: Track starship status, coordinates, and health metrics
- **Status Dashboard**: Overview of operational, maintenance, critical, and decommissioned ships
- **Health Indicators**: Visual hull integrity and shield strength bars
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Theme**: Space-themed UI with Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hfelixmiguel/star-fleet-monitoring-dashboard.git
cd star-fleet-monitoring-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## 📁 Project Structure

```
src/
├── app/          # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Dashboard home
│   └── globals.css    # Global styles
├── components/     # React components
│   ├── ShipCard.tsx  # Starship card component
│   └── index.ts      # Component exports
├── data/          # Mock data and utilities
│   ├── starships.ts  # Starship mock data
│   └── index.ts      # Data exports
├── types/         # TypeScript definitions
│   ├── starship.ts   # Starship interface
│   └── index.ts      # Type exports
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite-compatible bundling
- **Linting**: ESLint with Next.js config

## 🔧 CI/CD Pipeline

The repository includes GitHub Actions for:
- Automated linting on PRs
- Build verification
- Node.js 20+ compatibility checks

## 📝 Development Guidelines

### Adding New Starships

Add starship data in `src/data/starships.ts`:

```typescript
{
  id: '6',
  name: 'USS YourShip',
  registry: 'NCC-XXXXX',
  status: 'operational', // or 'maintenance', 'critical', 'decommissioned'
  class: 'Ship Class Name',
  coordinates: { x: number, y: number, z: number },
  health: { hull: number, shields: number, crew: number },
  lastUpdate: 'ISO timestamp'
}
```

### Component Structure

Components should follow the pattern established by `ShipCard.tsx`:
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind
- Include status indicators and health bars

## 📄 License

MIT License - feel free to use this project for your own fleet monitoring needs! ⭐

---

**Built with Next.js, TypeScript, and a lot of coffee ☕**