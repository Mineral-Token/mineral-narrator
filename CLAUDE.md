# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Mineral Narrator" - a React-based web application that serves as an AI-powered storytelling guide for Mineral Token (MXTK). The application uses OpenRouter API to provide conversational AI assistance about mineral asset tokenization.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks + TanStack Query for server state
- **AI Integration**: OpenRouter API with Mistral 7B model
- **Deployment**: Built for Lovable.dev platform

## Key Commands

```bash
# Development
npm run dev          # Start development server with auto-reload
npm i               # Install dependencies

# Build & Deploy
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Project Architecture

### Application Structure
- **Single Page App** with React Router handling navigation
- **Component-based architecture** using shadcn/ui design system
- **API integration** through OpenRouter for AI conversations
- **Route structure**:
  - `/` - Main index page with hero section and chat interface
  - `/privacy` - Privacy policy
  - `/terms` - Terms of service
  - `*` - 404 Not Found page

### Core Components
- `HeroSection` - Landing page hero with call-to-action
- `ChatInterface` - Main AI chat functionality with message handling
- `Footer` - Site footer with navigation links

### AI Integration (src/lib/openrouter.ts)
- **System prompt** defines the AI persona as a storytelling guide for MXTK
- **Knowledge base** contains hardcoded information about Mineral Token
- **Fallback responses** provide basic answers when API fails
- **API key management** handled via environment variables

### State Management Pattern
- Local component state with `useState` for UI state
- TanStack Query setup in App.tsx for server state (currently unused)
- Props drilling for passing handlers between components

## Environment Configuration

### Local Development Setup
1. Copy `.env.example` to `.env`
2. Configure your environment variables in `.env`

### Required Environment Variables
- `VITE_OPENROUTER_API_KEY` - OpenRouter API key for AI integration
- `VITE_LOGGING_ENDPOINT` - Optional external logging endpoint URL
- `NODE_ENV` - Environment (development/production)

### GitHub Pages Deployment
The project is configured to deploy to GitHub Pages automatically via GitHub Actions:

#### GitHub Secrets Required:
- `VITE_OPENROUTER_API_KEY` - Production OpenRouter API key
- `VITE_LOGGING_ENDPOINT` - Production logging endpoint (optional)

#### Deployment Configuration:
- **Base URL**: `/mineral-narrator/` (configured in vite.config.ts)
- **Trigger**: Push to main branch
- **Build**: `npm run build` with environment variables from GitHub secrets
- **Deploy**: Automated via `peaceiris/actions-gh-pages@v3`

### API Configuration
- **Model**: `mistralai/mistral-7b-instruct`
- **Max tokens**: 1000
- **Temperature**: 0.7 (balanced creativity/consistency)

### Logging System
- **Console Logging**: All conversations logged to browser console
- **Local Storage**: Last 100 conversations stored locally
- **External Logging**: Optional webhook endpoint for production analytics
- **Log Format**: Includes timestamp, user message, AI response, session ID, user agent, and model used

## Development Patterns

### Component Conventions
- Use TypeScript for all components
- Follow shadcn/ui patterns for UI components
- Import paths use `@/` alias for src directory
- Props interfaces defined inline or as separate types

### Styling Approach
- Tailwind CSS with custom theme extensions
- shadcn/ui component library for consistent design
- Custom gradients and mineral-themed color palette
- Responsive design with mobile-first approach

### Route Management
- All custom routes must be added above the catch-all `*` route in App.tsx
- Use React Router's `element` prop pattern
- Smooth scrolling implemented for chat section navigation

## Key Business Logic

### MXTK Knowledge Base
The application contains hardcoded knowledge about:
- Mineral Token overview and value proposition
- Asset tokenization process (1:1 backing)
- Required documentation (43-101 reports, JORC reports, SKR)
- Market statistics ($19+ billion in committed assets)

### Chat Flow
1. User starts with hero section prompts or custom message
2. `handleStartChat` triggers chat interface display
3. Messages sent to OpenRouter API with system prompt
4. Responses formatted as storytelling narratives
5. Fallback responses handle API failures gracefully

## Testing and Quality

- ESLint configuration with React and TypeScript rules
- No test framework currently configured
- Type checking through TypeScript compiler
- Lovable.dev platform handles deployment and hosting

## VS Code Configuration

- `remapping.txt` file provides TypeScript path mapping for VS Code
- TypeScript path aliases configured: `@/*` maps to `./src/*`
- VS Code will recognize import paths like `@/components/Button`

## Deployment Notes

### GitHub Pages
- Automatic deployment via GitHub Actions on push to main
- Static site deployment (no server-side requirements)
- Environment variables managed through GitHub repository secrets
- Production URL: `https://[username].github.io/mineral-narrator/`

### Local Development
```bash
# Setup
cp .env.example .env
# Edit .env with your API keys
npm install
npm run dev
```

### Build and Preview
```bash
npm run build        # Production build
npm run build:dev    # Development build with source maps
npm run preview      # Preview production build locally
```