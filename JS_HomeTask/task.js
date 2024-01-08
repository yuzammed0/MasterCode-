// ! Home tasks 

// !String (metodlardan istifadeye icaze var)
//? 5.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen cumledeki sozlerden (reqemler arraya elave olunmamalidir) ibaret array qaytarmalidir
 */

let arr1 = 'asd5as4d5as7d8asasdmn7d54asdas7fz5xv'

const addLetter = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (!(str.charCodeAt(i) > 48 && str.charCodeAt(i) < 57)) {
            arr.push(str[i]);
        }
    }
    return arr;
}

console.log(addLetter(arr1));

//? 6.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen metnde en cox istifade olunan sozu qaytarmalidir
 */

let arr = 'lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum Quisquam, quibusdam.';

const mostWord = (str) => {
    let arr = str.split(' ');
    let c = 0;
    let coxTekrar = '';
    for (let i = 0; i < arr.length; i++) {
        let nece = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                nece++;
            }
        }
        if (nece > c) {
            c = nece;
            coxTekrar = arr[i];
        }
    }

    return coxTekrar;
}

console.log(mostWord(arr));

//! Array basic (metod istifadəsi olmadan)
/* 1.
 * verilmiş ixtiyari n ədədli massivdə max elementi təyin edən funksiya yazın
 */

let arr3 = [5, 9, 6, 3, 8, 88];

const maxNum = (arr) => {
    max = arr3[0];
    for (i of arr) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

console.log(maxNum(arr3));

/* 2.
 * verilmiş ixtiyari n ədədli massivdə min elementi təyin edən funksiya yazın
 */
let arr4 = [5, 9, 1, 6, 3, 8, 88];


const minNum = (arr) => {
    min = arr3[0];
    for (i of arr) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}

console.log(minNum(arr4));

/* 4.
 * verilmiş ixtiyari n ədədli massivi maksimumdan minimuma doğru sıralayan funksiya yazın
 */
let arr5 = [5, 9, 1, 6];

const azCox = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        let min = arr[j];
        for (let i = j; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
                arr[i]=arr[j];
            }
            arr[j]=min;
        }
    }

    return arr;
}


console.log(azCox(arr5));
/* 5.
 * verilmiş ixtiyari n ədədli massivi minimumdan maksimuma doğru sıralayan funksiya yazın
 */
let arr6 = [5, 9, 1, 6];


const coxAz = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        let max = arr[j];
        for (let i = j; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
                arr[i]=arr[j];
            }
            arr[j]=max;
        }
    }

    return arr;
}


console.log(coxAz(arr6));


// 6.length methodu istifade etmeden arrayin uzunlugun qaytaran funksiya yazin
let arr7 = [5, 9, 1, 6];

const lengthArr = (arr) => {
    let c = 0;
    for (i of arr) {
        c++;
    }
    return c;
}

console.log(lengthArr(arr7));