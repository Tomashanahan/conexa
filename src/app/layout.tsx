import { colors } from '@/theme/theme-colors';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Conexa challenge',
    description: 'Conexa challenge, solved by Tomas Shanahan ',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body style={{ backgroundColor: colors.grey[100] }} className={dmSans.className}>
                {children}
            </body>
        </html>
    );
}
