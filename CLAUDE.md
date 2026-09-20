# Claude / AI Development Guide

## Commands
- `npm run dev`: Start Vite development server
- `npm run build`: Run TypeScript compiler & Vite build (`tsc && vite build`)
- `npm run preview`: Preview production build

## Architecture & Code Standards
- **Framework**: React 18 + TypeScript + Vite + Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Data Models**: Strict TypeScript interfaces in `src/data/listingData.ts`
- **Images**: Base64 data URIs in `src/data/images.ts` for instant rendering
- **Overlay Views**: `PhotoTourModal` & `LightboxModal` with full keyboard accessibility
