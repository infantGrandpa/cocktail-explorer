import type {Cocktail} from "~/routes/cocktails";
import {Box, Card, Heading, Inset, Text} from "@radix-ui/themes";


interface Props {
    cocktail: Cocktail
}

const CocktailCard = ({cocktail}: Props) => {
    return (
        <Box>
            <Card size="3">
                <Inset clip="padding-box" side="top" pb="current">
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                </Inset>
                <Heading as="h3">{cocktail.strDrink}</Heading>
                <Text size="3">{cocktail.strInstructions}</Text>
            </Card>
        </Box>
    )
}

export default CocktailCard