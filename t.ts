function se() { 
console.log('run:');
    return new Promise((res, rej) => { 
        setTimeout(() => {
            res('123');
        }, 3000);
    });
}

se().then(v => { 
    console.log(v);
})
.catch(e=>{
    console.log(e);
})