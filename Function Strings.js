function strings(){
    // Gets the value entered in the input field with id "firstString"
    var string1 = document.getElementById("firstString").value;
    
    // Splits the input string into separate characters
    var splitStr = string1.split("");

    // Reverse the inputed characters
    var reverseStr = splitStr.reverse();

    // Checking to see if the string is same forwards and backwards
    var joinStr = reverseStr.join("");


    if (string1 == joinStr)
    // If it's a Palindrome
    {
        document.getElementById("updates").innerHTML = "It's a Palindrome";
    }
    else
    // If it's not a Palindrome
    {
        document.getElementById("updates").innerHTML = "Not a Palindrome";
    }
}