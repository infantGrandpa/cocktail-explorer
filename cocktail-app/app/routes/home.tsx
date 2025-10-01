import type {Route} from "./+types/home";
import {Heading} from "@radix-ui/themes";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return (
        <Heading>"Hello!"</Heading>
    )
}
