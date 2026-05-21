import React from 'react';

class ChunkErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorType: null };
  }

  static getDerivedStateFromError(error) {
    const errorMessage = error.message || '';
    const isChunkError = 
      errorMessage.includes('Failed to fetch dynamically imported module') ||
      errorMessage.includes('dynamic import') ||
      errorMessage.includes('Importing a module script failed') ||
      errorMessage.includes('ChunkLoadError') ||
      errorMessage.includes('CSS chunk');
    
    return { hasError: true, errorType: isChunkError ? 'chunk' : 'generic' };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ChunkErrorBoundary caught an error:', error, errorInfo);
    
    if (this.state.errorType === 'chunk') {
      const chunkReloadKey = 'chunk-reload-timestamp';
      const lastReload = sessionStorage.getItem(chunkReloadKey);
      const now = Date.now();

      // Avoid infinite loops (e.g. if the user is completely offline)
      // by restricting automatic reloads to once every 10 seconds.
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem(chunkReloadKey, now.toString());
        console.warn('Chunk load failed. Triggering automatic application update...');
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.state.errorType === 'chunk') {
        return (
          <div className="flex flex-col justify-center items-center min-h-[60vh] py-20 px-6 bg-white text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              Updating Application
            </h2>
            <p className="text-gray-500 mb-8 max-w-md text-sm leading-relaxed">
              We're loading the latest version of LandsnDeeds. This will take just a few seconds.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-100 border-b-[#D6B97B]"></div>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-xs font-semibold text-[#D6B97B] hover:text-[#bfa365] transition-colors cursor-pointer"
              >
                Click here if it doesn't reload automatically
              </button>
            </div>
          </div>
        );
      }

      // Fallback for other runtime crashes
      return this.props.fallback || (
        <div className="flex flex-col justify-center items-center min-h-[60vh] py-20 px-6 bg-white text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-3 tracking-tight">
            Something went wrong
          </h2>
          <p className="text-gray-500 mb-8 max-w-md text-sm leading-relaxed">
            An unexpected error occurred while loading this section. Please try refreshing.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2.5 bg-[#D6B97B] text-white rounded-lg hover:bg-[#bfa365] transition-all font-medium shadow-md shadow-amber-100 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary;
