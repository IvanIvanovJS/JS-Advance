import { initNav, navigate } from "./utils/nav.js";
import { showCreateView } from "./views/create.js";
import { showDashboardView } from "./views/dashboard.js";
import { showDetailsView } from "./views/details.js";
import { showHomeView } from "./views/home.js";
import { showLoginView } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { showRegisterView } from "./views/register.js";



const views = {
    "Login": showLoginView,
    "Home": showHomeView,
    "Register": showRegisterView,
    "Logout": onLogout,
    "Dashboard": showDashboardView,
    "Create": showCreateView,
    "Details": showDetailsView
}
initNav(views)
navigate("Home")
