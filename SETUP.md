# Setup Instructions for GitHub Pages Deployment

## Prerequisites
- Node.js 18+ and npm
- GitHub repository
- OpenRouter API key

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mineral-narrator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your OpenRouter API key:
   ```
   VITE_OPENROUTER_API_KEY=your_actual_api_key_here
   VITE_LOGGING_ENDPOINT=https://your-logging-endpoint.com/log  # Optional
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## GitHub Pages Deployment Setup

1. **Configure GitHub repository secrets**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add these repository secrets:
     - `VITE_OPENROUTER_API_KEY`: Your production OpenRouter API key
     - `VITE_LOGGING_ENDPOINT`: Your logging endpoint URL (optional)

2. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically by the action)

3. **Update repository name in vite.config.ts if needed**
   - The base URL is set to `/mineral-narrator/`
   - Change this to match your repository name if different

4. **Deploy**
   - Push to main branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://yourusername.github.io/mineral-narrator/`

## Logging Configuration

### What gets logged:
- User questions and AI responses
- Session IDs for conversation tracking  
- Timestamps and user agent information
- API model used (OpenRouter model name)

### Where logs are stored:
1. **Browser console** (always enabled)
2. **Local storage** (last 100 conversations, automatic cleanup)
3. **External endpoint** (if `VITE_LOGGING_ENDPOINT` is configured)

### Accessing logs:
```javascript
// In browser console
logger.getLogs()        // View all stored logs
logger.exportLogs()     // Export as JSON string
logger.clearLogs()      // Clear local storage
```

## OpenRouter API Information

You can check your API usage and billing at:
- [OpenRouter Dashboard](https://openrouter.ai/activity)
- [OpenRouter Models](https://openrouter.ai/models) - Currently using `mistralai/mistral-7b-instruct`

Note: The application includes fallback responses for common questions if the API is unavailable.