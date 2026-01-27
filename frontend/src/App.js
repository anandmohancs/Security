import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import TrainingPage from "@/pages/TrainingPage";
import ContactPage from "@/pages/ContactPage";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/training" element={<TrainingPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Layout>
                <Toaster position="top-right" richColors />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
