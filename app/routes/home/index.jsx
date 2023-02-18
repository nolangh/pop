import { Links, Meta } from "@remix-run/react";
import styles from "./tailwind.css";

//**Imports

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
	title: "Home",
	description: "Task Home",
});

//** Main
export default function HomeIndex() {
	return <div> This is Home index</div>;
}
