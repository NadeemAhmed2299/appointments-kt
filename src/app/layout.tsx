import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Styledroot } from './StyledRoot';
import Sidebar from './components/sidebar/page';
import { Box } from '@mui/material';
import HeaderAppBar from './components/header/page';


const nunito = Nunito_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: "Appointments",
  description: "A simple appointment booking system of Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Styledroot>
            <Box display="flex" minHeight="100vh">
              {/* Sidebar stays on the left */}
              <Sidebar />

              {/* Right side: Header + Content */}
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header only spans the main area */}
                <HeaderAppBar />

                {/* Main content */}
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    bgcolor: '#f5f6fa',
                    transition: 'width 0.3s',
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </Styledroot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
