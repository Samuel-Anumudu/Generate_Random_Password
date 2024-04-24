// PROBLEM
/* 
    Write a function that generates random password of a specified length, with the option to include lowercase letters, uppercase letters, numbers, and symbols 
*/

// CONSTRAINTS
/* 
    1. settings[i] has to be in lowercase characters
    2. settings is enforced to only have 'uppercase, lowercase, numbers, symbols' keywords.
*/

// TIME AND SPACE COMPLEXITY
/* 
    This solution can surely be improved. However, right now, the space and time complexity is linear time O(n).
    This is because the password string grows linearly with the length of the password. The SYMBOLS, ALPHABET, and NUMBERS constants are fixed in size and do not grow with the size of the password, so they do not significantly affect the overall space complexity.
*/

function generateRandomPassword(length, settings = ["symbols"]) {
  // Note:  In the function parameter for 'settings', I am enforcing symbols as the default setting if nothing is specified

  // Final password to be returned
  let password = "";

  // Default Constants
  const SYMBOLS = ",.!$%*^@&+_=?-:[]{};";
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const NUMBERS = "123456789";

  // Loop through the length of the password
  for (let i = 1; i <= length; i++) {
    password += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));

    // Evaluate each setting case and append a random character to the password string
    for (let setting of settings) {
      switch (setting) {
        case "uppercase":
          password += ALPHABET.toUpperCase().charAt(
            Math.floor(Math.random() * ALPHABET.length)
          );
          break;

        case "lowercase":
          password += ALPHABET.toLowerCase().charAt(
            Math.floor(Math.random() * ALPHABET.length)
          );
          break;

        case "numbers":
          password += NUMBERS.toLowerCase().charAt(
            Math.floor(Math.random() * NUMBERS.length)
          );
          break;

        default:
          return;
      }
    }
  }

  //   Return only the first 'length' characters of the password string
  return password.slice(0, length);
}

// THANK YOU FOR THE OPPORTUNITY, YASH!!!.
