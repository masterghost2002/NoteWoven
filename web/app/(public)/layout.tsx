import Footer from "@/components/footer/Footer";
import PublicHeader from "@/components/PublicHeader";
import { Toaster } from 'sonner';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    
    return (
        <div
            className="
          flex 
          flex-col 
          min-h-screen
          font-ma
          relative
          dark:bg-dark-gray
          dark:text-white
        "
        >
            <Toaster
                position="top-center"
                richColors={true}
            />
            
            <PublicHeader />
            <main
                className="
          flex-grow 
          flex 
          flex-col 
          items-center 
          justify-center
          p-5
          "
                id="main-container"
            >
                {children}
            </main>
            <Footer />
        </div>
    )
}


