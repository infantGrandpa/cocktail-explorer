import type {Route} from "./+types/home";
import {Text, Box, Button, Container, Flex, Heading} from "@radix-ui/themes";
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
            <Box py="8" style={{backgroundColor: "#333333", width: "100%", minHeight: "100px"}}>
                <Flex direction="column" align="center">
                    <Heading size="8" align="center">Find your next cocktail here!</Heading>
                    <Text>There are really good drinks here!</Text>

                    <Button style={{maxWidth: "50%", margin:"1.5rem"}}>
                        <Link to="/cocktails">Cocktails (Just Mojito Really)</Link>
                    </Button>
                </Flex>
            </Box>
        </Container>

    )
}
