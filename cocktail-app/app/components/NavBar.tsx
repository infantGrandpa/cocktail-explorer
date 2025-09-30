import {Box, Button, Flex, Heading, IconButton, TextField} from "@radix-ui/themes";


export default function NavBar() {
    return (
        <Box py="4" px="8" mb="8" style={{backgroundColor: "#000000"}}>
            <Flex gap="3" justify="between">
                <Heading as="h1">Cocktail Explorer</Heading>
                <TextField.Root placeholder="Mojito..." >
                    <TextField.Slot side="right">
                        <Button variant="ghost">Go</Button>
                    </TextField.Slot>
                </TextField.Root>
            </Flex>
        </Box>
    )
}