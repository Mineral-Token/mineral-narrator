# Mineral Narrator

An AI-powered storytelling guide for Mineral Token (MXTK) that provides conversational assistance about mineral asset tokenization through immersive narrative experiences.

## Overview

Mineral Narrator is a React-based web application that serves as an intelligent guide for understanding MXTK (Mineral Token) - a pioneering asset-backed cryptocurrency that unlocks liquidity for mineral asset owners worldwide through 1:1 tokenization of verified mineral assets.

### Key Features

- **Interactive AI Chat Interface** - Conversational AI that explains MXTK concepts through engaging stories
- **MXTK Knowledge Base** - Comprehensive information about mineral tokenization, processes, and market data
- **Conversation Logging** - Tracks user interactions for analytics and improvements
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Fallback System** - Provides responses even when AI service is unavailable

## Technology Stack

- **React 18** with TypeScript for type-safe development
- **Vite** for fast build system and hot module replacement
- **Tailwind CSS** + **shadcn/ui** for modern, accessible UI components
- **AI Integration** for conversational interface and storytelling
- **React Router** for client-side routing
- **TanStack Query** for server state management

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/mineral-narrator.git
cd mineral-narrator

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and add your API keys (see Environment Configuration below)

# 4. Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run build:dev` | Create development build with source maps |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run preview` | Preview production build locally |

## Environment Configuration

### Required Environment Variables

Create a `.env` file in the root directory:

```bash
# AI API Configuration
VITE_OPENROUTER_API_KEY=your_api_key_here

# Logging Configuration (optional)
VITE_LOGGING_ENDPOINT=https://your-logging-endpoint.com/log

# Environment
NODE_ENV=development
```

### API Key Setup

1. Get an API key from your AI service provider
2. Add it to your `.env` file as `VITE_OPENROUTER_API_KEY`
3. For production, configure this as a GitHub repository secret

## Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (created automatically by GitHub Actions)

2. **Configure GitHub Secrets**
   - Go to repository → Settings → Secrets and variables → Actions
   - Add these repository secrets:
     - `VITE_OPENROUTER_API_KEY`: Your production AI API key
     - `VITE_LOGGING_ENDPOINT`: Your logging endpoint (optional)

3. **Deploy**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://yourusername.github.io/mineral-narrator/`

#### Deployment Configuration

- **Trigger**: Push to main branch
- **Build**: `npm run build` with environment variables from GitHub secrets  
- **Deploy**: Automated via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Base URL**: `/mineral-narrator/` (configured in `vite.config.ts`)

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── ChatInterface.tsx
│   ├── HeroSection.tsx
│   └── Footer.tsx
├── lib/                # Utility libraries
│   ├── openrouter.ts   # AI integration
│   ├── logger.ts       # Conversation logging
│   └── utils.ts        # General utilities
├── pages/              # Route pages
├── hooks/              # Custom React hooks
└── assets/             # Static assets
```

## Development

### VS Code Configuration

The project includes a `remapping.txt` file for TypeScript path mapping:
- `@/*` maps to `./src/*`
- Enables clean imports like `@/components/Button`

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Component-based architecture with shadcn/ui patterns

### Building

```bash
# Development build (with source maps)
npm run build:dev

# Production build (optimized)
npm run build

# Preview production build
npm run preview
```

## Features

### AI Conversation System

- **Storytelling Approach**: Explains technical concepts through engaging narratives
- **Knowledge Base**: Contains comprehensive MXTK information ($33+ billion in committed assets)
- **Fallback Responses**: Provides helpful responses when AI service is unavailable
- **Session Management**: Tracks conversations with unique session IDs

### Logging & Analytics

- **Console Logging**: All conversations logged to browser console
- **Local Storage**: Last 100 conversations stored locally with auto-cleanup
- **External Logging**: Optional webhook integration for production analytics
- **Comprehensive Data**: Captures user messages, AI responses, timestamps, and session info

### User Experience

- **Immediate Availability**: Chat works instantly without configuration
- **Mobile Responsive**: Optimized for all device sizes  
- **Smooth Interactions**: Loading states and error handling
- **Clean Interface**: Focus on conversation without technical complexity

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Test the build (`npm run build`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Support

For questions or support, please contact the development team or create an issue in the repository.