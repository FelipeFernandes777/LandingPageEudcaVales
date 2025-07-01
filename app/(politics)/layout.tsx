import Footer from "@/components/footer";

export default function RootLayout({ children }:
    Readonly<{ children: React.ReactNode; }>){
    return (
        <html lang="pt-br">
        <body className={`antialiased`}>
        <main className="flex-1">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
