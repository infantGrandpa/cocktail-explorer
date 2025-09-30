import {Flex, Text, Button, Container} from "@radix-ui/themes";

export default function CocktailGrid() {
    return (
        <Container size="1">
            <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :)</Text>
                <Button>Let's go</Button>
            </Flex>
        </Container>
    );
}
