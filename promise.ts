const getdata = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve ("Data received successfully");
    }, 3000);
})

getdata.then((msg) => console.log(msg));