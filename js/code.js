const COIN_INFO_ENDPOINT = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=30&tsym=USD'
const COIN_PRICE_ENDPOINT = 'https://min-api.cryptocompare.com/data/pricemulti?&tsyms=USD&fsyms='

class CryptoApp {
    constructor(){
        this.coinData = {};
    }

    makeApiCall(endPoint, callback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status ==200){
                callback(JSON.parse(this.response));
            }
        }
        xhttp.open("GET", endPoint, true);
        xhttp.send();
    }
    
    start(){
        this.makeApiCall(COIN_INFO_ENDPOINT, coinData => {
            coinData.Data.forEach(coin => {
                this.coinData[coin.CoinInfo.Name] = coin.CoinInfo;
                
            });
            console.log(this.coinData);
        });
    }



}

const crypto = new CryptoApp();
crypto.start();