import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-[60vh] items-center flex justify-center flex-col">
          <h1 className="text-3xl font-semibold" style={{ color: "black" }}>Oops... Something went wrong</h1>
          <br />
          <button
          
            onClick={() => {
              window.location.href = "/";
                  }}
                  className="bg-black text-white px-4 py-2 "
          >
            Go back
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;