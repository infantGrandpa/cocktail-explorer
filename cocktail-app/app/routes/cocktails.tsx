import {useLoaderData} from "react-router";
import {Container, Heading} from "@radix-ui/themes";
import CocktailCard from "~/components/CocktailCard";

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strTags: string;
    strCategory: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
}

interface CocktailApiResponse {
    drinks: Cocktail[] | null;
}

export async function loader() {
    console.log("Sending request...")
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
    const data: CocktailApiResponse = (await response.json()) as CocktailApiResponse;
    return data.drinks;

}

const Cocktails = () => {
    const cocktails: Cocktail[] | null = useLoaderData<typeof loader>()

    const mainCocktail: Cocktail | null = cocktails ? cocktails[0] : null;

    if (!mainCocktail) {
        return <Heading as="h1">No Cocktail Found!</Heading>
    }

    return (
        <Container>
            <CocktailCard cocktail={mainCocktail}/>
        </Container>
    )
};

export default Cocktails;
