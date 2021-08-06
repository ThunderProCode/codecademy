// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//returns object with properties: specimenNUm and dna
const pAequorFactory = (specimenNum,dna) => {
  return{
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let index = Math.floor(Math.random()* this.dna.length);
      let rand = returnRandBase();
      
      while(rand === this.dna[index]){
        rand = returnRandBase();
      }
      this.dna[index] = rand;
    }, 
    compareDNA(pAequor){
      let ret = 0;
      for(let i=0; i< this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]) ret++;

      }
      const change = Math.floor((ret / this.dna.length)*100);
      return `Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${change}% DNA in common.`
    }, 
    willLikeLySurvive(){
      let ret = 0;
      for(let i=0; i< this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G') ret++;
      }
      const change = Math.floor((ret / this.dna.length)*100);
      if(change >= 60 ){
        return true
      }else{
        return false;
      }
    }, 
    complementStrand(){
      let strand = [];
      for(let i=0; i< this.dna.length; i++){
        let letter = this.dna[i];
        switch(letter){
          case 'A': strand.push('T');
          break;
          case 'T': strand.push('A');
          break;
          case 'C': strand.push('G');
          break;
          case 'G': strand.push('C');
        }
      }
      return strand; 
    }
  }
}


function instances(){
  let pAequors = [];
  let i = 1;
  let p = pAequorFactory(i,mockUpStrand());

  while(i<=30){
    p = pAequorFactory(i,mockUpStrand());
    if(p.willLikeLySurvive() === true){
      pAequors.push(p);
      i++;
    }
  }
  return pAequors;
}

const instance = instances();
console.log('LENGTH: ',instance.length);

console.log('HULK: ',instance[0]);
instance[0].mutate();

console.log('MUTATED HULK: ',instance[0]);
console.log('RED HULK: ',instance[1]);

console.log('HULK AND RED HULK DNA COMPARISON: ',instance[0].compareDNA(instance[1]))
console.log('RED HULKS COMPLEMENT: ',instance[1].complementStrand().toString());


