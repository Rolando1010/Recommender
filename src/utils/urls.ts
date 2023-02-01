const isURL = (url: string) => {
	try{
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

const extractURLs = (text: string): string[] => {
	return text.match(/(((https?:\/\/)|(www\.))[^\s]+)/g) || [];
}

export { isURL, extractURLs };