function addMobile(){
    let name=mb_name.value
    let brand=mb_brand.value
    let display=mb_display.value
    let ram=mb_ram.value
    let proccessor=mb_pro.value
    let price=mb_price.value

    let mobile={
        name,
        brand,
        display,
        ram,
        proccessor,
        price

    }

    if(name in localStorage)
    {
        alert("already exist")
    }
    else{

        localStorage.setItem(mobile.name,JSON.stringify(mobile))
        alert("mobile successfully added")
    }

}