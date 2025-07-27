import { delIdea } from "../api/data.js";
import { navigate } from "../utils/nav.js";

export async function onDelete(id) {
    try {
        await delIdea(id)
        navigate("Dashboard")

    } catch (err) {
        alert(err.message)
    }


}