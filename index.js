function reverse(name){
    name = name.split("").reverse().join("");
    return name
}

var reverseName= reverse("jorge")
console.log(reverseName)