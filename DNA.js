// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// if the index of the array === Object.keys(complementary) return the Object.values(complementary)


// function DNAStrand(dna){

//     let newArry = ''

//     // FIRST OPTION:
//     for(let i = 0; i < dna.length; i++){
//         switch(dna[i]){
//             case 'A':
//                 newArry += 'T';
//                 break
//             case 'T':
//                 newArry += 'A';
//                 break
//             case 'C':
//                 newArry += 'G';
//                 break
//             case 'G':
//                 newArry += 'C'
//                 break
//         }
//     }
//     return newArry
// }

    // SECOND OPTION
function DNAStrand(dna){
    let result= "";
        for(let i =0; i<dna.length; i++) 
        {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
       }
       return result;
    }

console.log(DNAStrand('AATC'))
