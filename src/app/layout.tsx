// src/app/layout.tsx
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import './globals.css'; // Ensure global styles are included

// This is a server component; it can export metadata
export const metadata = {
  title: "CHAINAIM",
  description: "Generated by create next app",
};

// The layout component should include <html> and <body>
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en"> {/* Add the <html> tag with language attribute */}
      <body>
        <ChakraProvider>
          <Box>
            <Navbar />
            <Box p={4}>{children}</Box>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default Layout;