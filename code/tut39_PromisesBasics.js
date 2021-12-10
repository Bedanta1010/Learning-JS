console.log("Promises Basics in JS");

function func1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const err = true;

            if (!err){
                console.log('Your Promise has been resolved !');
                resolve();
            }
            else{
                console.log("Your promise was not resolved !");
                reject('Sorry not fulfilled...');
            };
        }, 2000);
    });
};

func1().then(function(){
    console.log('Thanks for Resolving');
}).catch(function(error){
    console.log('Very bad bro. Reason: ' + error);
});