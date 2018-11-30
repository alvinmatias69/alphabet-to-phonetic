const rule = new RegExp(/[a-z]/);
const phonetic: string[] = [ "alpha", "bravo", "charlie", "delta", "echo", "foxtrot",
                             "golf", "hotel", "india", "juliet", "kilo",
                             "lima", "mike", "november", "oscar", "papa",
                             "quebec", "romeo", "sierra", "tango", "uniform",
                             "victor", "whiskey", "x-ray", "yankee", "zulu" ];

export function convert(text: string): string {
    const textList = text.toLowerCase().split('');
    return textList.reduce((acc: string, cur: string, index: number): string => {
        if (!rule.test(cur)) {
            return acc + cur;
        }
        const position = cur.charCodeAt(0) - 97;
        return acc + phonetic[position] + (index < textList.length - 1 ? " " : "");
    }, '');
}

export function reverse(text: string): string {
    const textList = text.toLowerCase().split(' ');
    return textList.reduce((acc: string, cur: string): string => {
        if (!phonetic.includes(cur)){
            return acc + cur + " ";
        }
        const position = phonetic.indexOf(cur);
        return acc + String.fromCharCode(position + 97);
    }, '');
}