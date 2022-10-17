import { Result } from "../interfaces/PokemonResponse";

export const formatList = (data: Result[]) => {
    // const list: any = [];
    // data.forEach((element, index) => {
    //     list.push({ name: element.name, id: index + 1 });
    // });

    // return list;

    return data.map((result, index) => (
        {
            id: index + 1,
            name: result.name
        }
    ))
};
