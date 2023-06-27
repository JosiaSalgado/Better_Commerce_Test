export async function getRegions(url){
	const answer = await fetch(url);
	const result = await answer.json();
	return result;
}

export async function getCommunes(url){
	const answer = await fetch(url);
	const result = await answer.json();
	return result;
}