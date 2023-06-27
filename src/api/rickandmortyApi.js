export async function getCharacters(url){
	const answer = await fetch(url);
	const result = await answer.json();
	return result;

}

export async function getCharactersByName(name) {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const answer = await fetch(url);
    const result = await answer.json();
    return result;

}
