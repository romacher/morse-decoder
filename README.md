# Morse code decoder

## Task

Your task is to write a function, that decodes Morse code and returns a string.
Write your solution in `src/index.js`

---

**Input:** String of `0` and `1`. Its length is multiple of 10.
- Each letter from alphabet encoded with dots(`.`) and dashes(`-`). `10` stands for dot(`.`), `11` stands for dash(`-`).
- Each encoded **letter's length is 10**.   
- If length of encoded letter is **less than 10**, it must be `left padded` with `0`.   
- `Space` in a input string is encoded with ten asterisks ->`**********`.
- **Example:** `me` -> `--` `.` -> `0000001111 0000000010`. Spaces in final result were added for the sake of concept better understanding. Input string does **NOT** include spaces.  
**Output:** String (decoded). Simply put, `00000011110000000010` should be decoded by your application as `me`.

---

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `https://github.com/romacher/morse-decoder.git`
- Go to the folder `morse-decoder`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passed and failed tests

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (morse-decoder)
4. Press the submit button and enjoy 
