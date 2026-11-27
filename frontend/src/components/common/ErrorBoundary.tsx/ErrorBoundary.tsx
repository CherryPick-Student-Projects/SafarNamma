import { Component, type ErrorInfo, type ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-28 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage-soft text-sage-text">
            <TriangleAlert className="h-7 w-7" />
          </div>
          <h1 className="mb-3 font-display text-3xl text-ink">Something went wrong</h1>
          <p className="mb-8 max-w-md text-muted">
            This page could not be loaded. It may be a temporary problem with your connection, or the app may have just been updated.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="button" className="btn-primary" onClick={this.handleRetry}>
              Try again
            </button>
            <button type="button" className="btn-ghost" onClick={this.handleReload}>
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
