"use client";

import { ThemeProvider } from "styled-components";
import RootStyleRegistry from "../../lib/RootStyleRegistry";
import { Providers } from "./providers";
import theme from "@/styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <Providers>
          <ThemeProvider theme={theme}>
            <RootStyleRegistry>{children}</RootStyleRegistry>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
