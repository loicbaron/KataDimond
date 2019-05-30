const getDepth = (letter: string) => {
    return letter.charCodeAt(0) - 65;
}

const getLetter = (depth: number) => {
    return String.fromCharCode(depth + 65);
}

const getPoints = (num: number) => {
    return ".".repeat(num);
}

const getPointsAround = (letter: string, totalDepth: number) => {
    return getPoints(totalDepth)+letter+getPoints(totalDepth);
}

const getInnerPoints = (letter: string) => {
    if(letter == "A") {
        return letter;
    }
    return letter + getPoints((getDepth(letter)*2)-1) + letter;
}

const getLine = (letter: string, totalDepth: number) => {
    return getPointsAround(getInnerPoints(letter), totalDepth - getDepth(letter));
}

const diamondCreator = (letter: string) => {
    const totalDepth = getDepth(letter);
    let result = "";
    for (let i = 0; i <= totalDepth; i++) {
        result += `${getLine(getLetter(i), totalDepth)}\n`;
    }
    for (let i = totalDepth - 1; i >= 0; i--) {
        result += `${getLine(getLetter(i), totalDepth)}\n`;
    }
    return result;
}

test('Should return A\n if the letter provided is A', () => {
    expect(diamondCreator("A")).toBe("A\n");
});

test(`Should return .A.\nB.B\n.A.\n if the letter provided is B`, () => {
    expect(diamondCreator("B")).toBe(`.A.\nB.B\n.A.\n`);
});

test(`Should return ..A..\n.B.B.\nC...C\n.B.B.\n..A..\n if the letter provided is C`, () => {
    expect(diamondCreator("C")).toBe(`..A..\n.B.B.\nC...C\n.B.B.\n..A..\n`);
});

test(`Should return ...A...\n..B.B..\n.C...C.\nD.....D\n.C...C.\n..B.B..\n...A...\n if the letter provided is D`, () => {
    expect(diamondCreator("D")).toBe(`...A...\n..B.B..\n.C...C.\nD.....D\n.C...C.\n..B.B..\n...A...\n`);
});

test(`Should return ....A....\n...B.B...\n..C...C..\n.D.....D.\nE.......E\n.D.....D.\n..C...C..\n...B.B...\n....A....\n if the letter provided is E`, () => {
    expect(diamondCreator("E")).toBe(`....A....\n...B.B...\n..C...C..\n.D.....D.\nE.......E\n.D.....D.\n..C...C..\n...B.B...\n....A....\n`);
});
