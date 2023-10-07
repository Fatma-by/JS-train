/**
 * 1) write a function named decimals
 * the function will format a number up to specified decimal places
 * the function will return a string
 * if the parameters not a number return false
 * ex :
 *      decimals(2100, 'a') ==> false
 *      decimals('a', 5) ==> false
 *      decimals(2.100212, 2) ==> '2.10'
 *      decimals(2.100212, 3) ==> '2.100'
 *      decimals(2100, 2) ==> '2100.00'
 *
 */
function decimals(number, decimalPlaces)
{
	if (typeof (number) !== "string" && typeof (decimalPlaces)!== "string")
	{
		return Number.parseFloat(number).toFixed(decimalPlaces);
	}
	return false;
}


// 2) Check if the lengths of the two strings are different

function compareTwoStrings(str1,str2) {

if (str1.length !== str2.length) {
    console.log("The Strings are not equal");
} else {
    let areEqual = true;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        console.log("The Strings are equal");
    } else {
        console.log("The Strings are not equal");
    }
}
}

/**
 * 3) write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */

function midElement(tab) {
    let any
    for (let index = 0; index < tab.length/2; index++) {
        
        any= (tab[index])
        
    }
console.log(any);
}

midElement([2,5,1,6])

/**
 * 4) Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */

function laugh(n) {
    let str =""
    for (let index = 0; index < n; index++) {
        str =str +"ha";
        
    }
    console.log(str);
}
laugh (3)
