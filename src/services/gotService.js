export default class GotService {
	_apiBase = 'https://www.anapioficeandfire.com/api';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, statsus: ${res.status}`);
		}

		return await res.json();
	}
	async getAllCharacters() {
		const res = await this.getResource('/characters?page=5&pageSize=10');
		return res.map(this._transformCharacter);
	}
	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}
	getAllBooks() {
		return this.getResource('/books');
	}
	getBooks(id) {
		return this.getResource(`/books/${id}`);
	}
	getAllHouses() {
		return this.getResource('/houses');
	}
	getHouses(id) {
		return this.getResource(`/houses/${id}`);
	}

	_transformCharacter(char) {
		return {
			name: char.name || 'unknown',
			gender: char.gender || 'unknown',
			born: char.born || 'unknown',
			died: char.died || 'unknown',
			culture: char.culture || 'unknown',
		};
	}

	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons,
		};
	}

	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released,
		};
	}
}

/* const got = new GotService();

got.getAllCharacters().then((res) => console.log(res.forEach((item) => console.log(item.name))));

got.getCharacter(42).then((res) => console.log(res)); */
