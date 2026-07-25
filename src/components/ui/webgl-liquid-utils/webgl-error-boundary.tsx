"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WebGLErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  public state: WebGLErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("WebGL Error Boundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export interface WebGLFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WebGLFallback({ className, ...props }: WebGLFallbackProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#04050b] via-[#0b1d3a] to-[#04050b] p-6 text-white",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,236,255,0.12),transparent_70%)] pointer-events-none" />
    </div>
  );
}
