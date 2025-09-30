import {useLoaderData} from "react-router";
import {Heading} from "@radix-ui/themes";

interface Cocktail {
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
    const data: CocktailApiResponse = await response.json();
    console.log(data)
    return data.drinks;

}

export default function Cocktails() {
    const cocktails: Cocktail[] | null = useLoaderData<typeof loader>()
    console.log("cocktails")
    console.log(cocktails)

    const cocktailName: string = cocktails ? cocktails[0].strDrink : "No Cocktail Found!";

    return (<Heading as="h2">{cocktailName}</Heading>)
}