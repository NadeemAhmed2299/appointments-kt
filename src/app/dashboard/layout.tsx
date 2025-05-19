import { Box } from "@mui/material";
import DashboardFooter from "./footer/page";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box
            p={0}
            sx={{
                '@media (min-width:768px)': {
                    padding: '2em',
                },
            }}
        >
            {children}
            <DashboardFooter />
        </Box>
    );
}
