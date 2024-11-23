import "./globals.css";
import React from "react";
import DashboardWrapper from "@/app/dashboardWrapper";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ErrorBoundary>
          <DashboardWrapper>{children}</DashboardWrapper>
      </ErrorBoundary>
      </body>
    </html>
  );
}
