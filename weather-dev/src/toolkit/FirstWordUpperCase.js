const FristWordUpperCase = str => {
    let words = str.split(' ');
    words = words.map(word => {
        word = word.toLowerCase();
        let chars = word.split('');
        chars[0] = chars[0].toUpperCase();
        return chars.join('');
    });
    return words.join(' ');
}

export default FristWordUpperCase;