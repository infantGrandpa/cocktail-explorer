import type {Cocktail} from "~/routes/cocktails";
import {Box, Card, Flex, Heading, Avatar, Text} from "@radix-ui/themes";


interface Props {
    cocktail: Cocktail
}

const CocktailCard = ({cocktail}: Props) => {
    return (
        <Box maxWidth="50%">
            <Card size="3">
                <Flex gap="3">
                    <Avatar src={cocktail.strDrinkThumb} fallback={cocktail.strDrink.charAt(0)} size="8"/>
                    <Box>
                        <Heading as="h3">{cocktail.strDrink}</Heading>
                        <Text size="3">{cocktail.strInstructions}</Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}

export default CocktailCard