for (let i = 1; i < 10; i++) {
    const list = [];
    for (let j = 1; j < i + 1; j++){
        list.push(`${j} x ${i} = ${i*j}`);
    }
    console.log(list.join('\t'));
}