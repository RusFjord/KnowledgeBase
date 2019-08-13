const rights = {
	all: "Все",
	user: "Пользователь",
	author: "Автор",
	administrator: "Администратор",

	getAll: () => {
		return [rights.all, rights.user, rights.author, rights.administrator];
	}
};

Object.freeze(rights);

module.exports = rights;
