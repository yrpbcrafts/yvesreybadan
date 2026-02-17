import { Route, Routes } from "react-router-dom";

import { Welcome } from "@/pages/clients-pages/welcome";
import { Authentication } from "@/pages/authentication";
import { AdminLayout } from "@/components/layouts/admin-layout";

// Example admin pages
import { Dashboard } from "@/pages/admin-pages/dashboard/dashboard";
import { ClientLayout } from "./components/layouts/client-layout";

export const Router = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/authentication" element={<Authentication />} />

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<ClientLayout />}>
                <Route index element={<Welcome />} />
            </Route>
        </Routes>
    );
};
