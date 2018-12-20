const rule = new RegExp(/[a-z]/);
const phonetic: string[] = [ "alpha", "bravo", "charlie", "delta", "echo", "foxtrot",
                             "golf", "hotel", "india", "juliet", "kilo",
                             "lima", "mike", "november", "oscar", "papa",
                             "quebec", "romeo", "sierra", "tango", "uniform",
                             "victor", "whiskey", "x-ray", "yankee", "zulu" ];
const numberList: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

export function convert(text: string): string {
    const textList = text.toLowerCase().split('');
    return textList.reduce((acc: string, cur: string, index: number): string => {
        let value = cur;
        if (rule.test(cur)) {
            const position = cur.charCodeAt(0) - 97;
            value = phonetic[position]; 
        } else if (cur === ' ') {
            value = '(space)';
        } else if (!isNaN(parseInt(cur))) {
            value = numberList[parseInt(cur)];
        }
        return acc + value + (index < textList.length - 1 ? " " : "");
    }, '');
}

export function reverse(text: string): string {
    const textList = text.toLowerCase().split(' ');
    return textList.reduce((acc: string, cur: string): string => {
        let value = cur;
        if (phonetic.includes(cur)) {
            const position = phonetic.indexOf(cur);
            value = String.fromCharCode(position + 97);
        } else if (cur === '(space)') {
            value = ' ';
        } else if (numberList.includes(cur)) {
            value = String(numberList.indexOf(cur));
        }
        return acc + value;
    }, '');
}