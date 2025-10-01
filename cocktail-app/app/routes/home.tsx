import type {Route} from "./+types/home";
import {Button, Container, Heading} from "@radix-ui/themes";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return (
        <Container>
            <Heading>"Hello!"</Heading>
            <Button>
                <Link to="/cocktails">Cocktails (Just Mojito Really)</Link>
            </Button>
        </Container>
    )
}
