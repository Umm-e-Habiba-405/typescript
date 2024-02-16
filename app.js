"use strict";
let guestList = ["babar", "Rizwan", "Haris", "Ahmed"];
const guestWhoCantMakeIt = guestList[1]; //Assuming Rizwan can't make it.//
console.log(`unfortunatly, ${guestWhoCantMakeIt} can't make it dinner  `);
//Replace who can't make it dinner with the new person.
guestList[1] = "Moiz"; //Invite moiz instead of Rizwan.//
console.log(" second set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest} please join us for dinner on Sunday night at 7 PM. See you there!`);
}
console.log("Great news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
guestList.unshift("Muzammil");
// Add one new guest to the middle of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "Hamza");
// Add one new guest to the end of the array
guestList.push("Ahad");
console.log(" new set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, please join us for dinner on Saturday night at 7 PM. See you there!`);
}
// prints a message saying that you can invite only two people for dinner. //
console.log("you can invite only two people for dinner.");
//Remove guests from your list one at a time until only two names remain in your list//
while (guestList.length > 2) {
    const removedGuest = guestList.pop(); //// Remove last guest from the list//
    if (removedGuest) {
        console.log(` sorry ${removedGuest}, can't invite them to dinner.`);
    }
}
//// Print message to the two remaining guests //
for (const remainingGuest of guestList) {
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the final list to confirm it's empty
console.log("Final list of guests:", guestList);
