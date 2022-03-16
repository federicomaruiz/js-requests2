function resolveAfter25seconds(){
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
        resolve('resolved');
    },2000);
    });
}

async function asyncCall(){
    try{
        console.log('calling');
        const result = await resolveAfter25seconds();
        console.log(result);
        const result2 = await resolveAfter25seconds();
        console.log(result2);
    } catch (error){
        console.log(error);
    }
}

asyncCall();