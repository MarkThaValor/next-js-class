function fetchBio(name: String) {
    switch (name) {
        case 'Mark':
            return 'Mark is a developer';
        case 'David':
            return 'David is a designer';
        case 'Patrick':
            return 'Patrick is a project manager';
        default:
            return 'No bio found';
    }
}

export default fetchBio;