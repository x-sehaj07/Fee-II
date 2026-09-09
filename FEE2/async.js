function placeorder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order placed");
        },2000);
    })
}
    function payment(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Payment Done");
            },2000)
        })
    }
    function inventoryUpdate(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("updated inventory");
            },2000)
        })
    }

    function sendEmail(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Email Sent");
            },2000)
        })
    }

    
    placeorder().then((result)=>{
        console.log(result);
        return payment();
    })
        .then(result=>{
            console.log(result);
            return inventoryUpdate();
        })
        .then(result=>{
            console.log(result);
            return sendEmail();
        })
    
