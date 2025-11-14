var getdata = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Data received successfully");
    }, 3000);
});
getdata.then(function (msg) { return console.log(msg); });
