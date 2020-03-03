
const axios = require('axios').default;

// -- Get data from API --------------------------------------------------------

    // -- Left here for the future - 'fetch' isn't supported in IE...
    // const getData = (self) => {
    //     fetch('https://project3.patrickdobson.co.uk/data.php')
    //         .then((resp) => resp.json())
    //         .then(function(data){
    //             self.setState({
    //                 data : data,
    //                 dataLoaded : true
    //             })
    //     })
    // }

    const getFeaturedData = (self) => {
        const formData = new FormData();
        formData.append('requested', 'featured');
        axios.post('https://project3.patrickdobson.co.uk/data.php',formData)
        .then(
            data => {
                self.setState({
                    featuredData : data.data,
                    featuredDataLoaded: true
                });
                getFullData(self);
            }
        )
    }

    const getFullData = (self) => {
        const formData = new FormData();
        formData.append('requested', 'full');
        axios.post('https://project3.patrickdobson.co.uk/data.php',formData)
        .then(
            data => {
                self.setState({
                    fullData : data.data,
                    fullDataLoaded : true
                })
            }
        )
    }

    const getProduct = (self, id) => {
        const formData = new FormData();
        formData.append('requested', 'product')
        formData.append('id', id);
        axios.post('https://project3.patrickdobson.co.uk/data.php',formData)
        .then(
            data => {
                self.setState({
                    productData : data.data,
                    productDataLoaded : true
                })
            }
        )
    }

    const basket = (self, id,action) => {

        const basket = self.state.basket.basketItems;
        const quantities = self.state.basket.basketQuantity;
        const totalQuantity = self.state.basket.totalQuantity;
        const totalPrice = self.state.basket.totalPrice;
        const data = self.state.fullData;

        let newBasket = basket;
        let newQuantity = quantities;

        if( action === 'add' ){
            if( basket.indexOf(id) !== -1 ){
                // -- Increment quantity if item already exists --
                    var index = basket.indexOf(id);
                    newQuantity[index] = newQuantity[index] + 1;
                    newBasket = basket;
            }else{
                // -- Add item if it doesn't already exist --
                    newBasket = basket.concat(id);
                    newQuantity = quantities.concat(1);
            }
        }else if( action === 'remove' ){
            var index = basket.indexOf(id);
            newQuantity[index] = newQuantity[index] - 1;
            if( newQuantity[index] < 1 ){
                newQuantity.splice(index,1);
                newBasket.splice(index,1);
            }else{
                newBasket = basket;
            }
        }
        // -- Calculate to basket quantity --
            let basketQuantity =  newQuantity.reduce((a,b)=>a+b,0);
        // -- Calculate total basket value --
            let newTotalPrice = 0;
            newBasket.forEach(function(value, index){
                let price = parseFloat(data.find( item => item.id === parseInt(value)).price);
                newTotalPrice += price * newQuantity[index];
            })
        // -- Set new basket state --
            self.setState({
                basket: {
                    basketQuantity : newQuantity,
                    basketItems: newBasket,
                    totalQuantity: basketQuantity,
                    totalPrice: newTotalPrice
                }
            });

    }

    const sendMail = (formContents) => {
        const formData = [{
            contactName: formContents.contactName,
            contactEmail: formContents.contactEmail,
            contactTel: formContents.contactTel,
            message: formContents.message
        }];
        let sendEmail = false;
        if( formContents.contactName !== '' && formContents.contactEmail !== '' && formContents.message !== '' ){
            sendEmail = true;
        }else{
            document.getElementById('emailErrorNote').style.display = 'block';
        }
        if(sendEmail){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('contactForm').style.display = 'none';
                    document.getElementById('emailThankYou').style.display = 'block';
                }
                if(xmlhttp.readyState == 4 && xmlhttp.status == 405){
                    document.getElementById('contactForm').style.display = 'none';
                    document.getElementById('emailError').style.display = 'block';
                }
                if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
                    document.getElementById('contactForm').style.display = 'none';
                    document.getElementById('emailError').style.display = 'block';
                }
            }
            xmlhttp.open('POST', 'sendMail.php');
            xmlhttp.send(JSON.stringify(formData));
        }
    }

// -----------------------------------------------------------------------------

export { getFeaturedData, getFullData, getProduct, basket, sendMail };
