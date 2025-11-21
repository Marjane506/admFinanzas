import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/peter-rovder.jpg')" }}
        >
            {/* Header */}
            <header className="p-2">
                <h1
                    className="text-4xl font-extrabold text-white
                 drop-shadow-lg"
                >
                    MyFinance Go
                </h1>
            </header>

            {/* Content wrapper */}
            <div className="flex min-h-[80vh] flex-col items-center pt-8 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="fill-current text-white drop-shadow-lg" />
                    </Link>
                </div>

                <div className="mt-10 w-full p-6 bg-white backdrop-blur-sm overflow-hidden px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>

            {/* Footer */}
            <footer className="p-6 text-center text-white text-sm opacity-70">
                © {new Date().getFullYear()} Finanzas Personales
            </footer>
        </div>
    );
}
