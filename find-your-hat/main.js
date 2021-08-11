const prompt = require('prompt-sync')({sigint: true});
console.log('(d - down)(u - up)(r - right)(l - left)\n');

class Field {
    constructor(myField){
        this._myField = myField;
        this._xPosition = 0;
        this._yPosition = 0;
        this._xLimit = myField[0].length;
        this._yLimit = myField.length;
        this._win = false;
        this._loose = false; 
    }
    
    get myField(){
        return this._myField;vb
    }

    get xPosition(){
        return this._xPosition;
    }

    get yPosition(){
        return this._yPosition;
    }

    get win(){
        return this._win;
    }

    get loose(){
        return this._loose;
    }

    //Prints the field 
    printField(){
        console.log(this._myField.join('\n'));
    }

    //This changes the player position everytime the user inputs 
    setPosition(playerMove){
        const playerMovement = playerMove.charAt(0);
        const playerPosition = this.getPosition();

        if((playerPosition[0] < this._xLimit) && (playerPosition[1] < this._yLimit)){
            switch(playerMovement){
                case 'd': this._xPosition = this._xPosition + 1;
                break;
                case 'u': this._xPosition = this._xPosition - 1;
                break;
                case 'r': this._yPosition = this._yPosition + 1;
                break;
                case 'l': this._yPosition = this._yPosition - 1;
            }
        }
    }

    //Returns the player position 
    getPosition(){
        const playerPosition = [this.xPosition,this.yPosition];
        return playerPosition;
    }

    //Returns an array with the positions of all the holes;
    getHoles(myField){
        let holes = [];

        for(let x = 0; x < this._xLimit; x++){
            for(let y = 0; y < this._yLimit; y++){
                if(myField[x][y] === 'O'){
                    holes.push([x,y]);
                }
            }
        }
        return holes;
    }

    //Shows the player movement in the field 
    displayMovement(playerPosition,holes){
        const hat = this.getHat(this._myField);
 
        if(playerPosition[0] < this._xLimit && playerPosition[1] < this._yLimit){

            if((playerPosition[0] === hat[0]) && (playerPosition[1] === hat[1])){
                this._win = true; 
            }

            for(let i = 0; i < holes[0].length; i++){
                if((playerPosition[0] === holes[i][0]) && (playerPosition[1] === holes[i][1])){
                    this._loose = true;
                }
            }

        this._myField[playerPosition[0]][playerPosition[1]] = '*';

        }else{

            this._loose = true; 
            console.log('\nYou cant go there!\n')
        }
    }

    //return the position of the hat 
    getHat(myField){

        let hat = [];
        for(let x = 0; x < this._xLimit; x++){

            for(let y = 0; y < this._yLimit; y++){

                if(myField[x][y] === '^'){
                    hat.push(x,y);
                }
            }
        }
        return hat;
    }

    //Randomly returns O or ░
    static randomChar(){
        let randomNumber = Math.random();
        let character = '';
        if(randomNumber < 0.2) character = 'O';
        else if(randomNumber >= 0.2) character = '░';
        
        return character; 
    }

    //returns array randomly filled with O and ░
    static randomArray(xVar){
        let  array = [];
        for(let x = 0; x < xVar ; x++){
            
            array.push(Field.randomChar());
        }
        return array; 
    }

    //returns a randomly generated field 
    static generateField(x,y){
        let nField = [];
        const fieldLength = [x,y];

        for(let y = 0; y < fieldLength[1]; y++){
            nField.push(Field.randomArray(x));
        }

        nField[0][0] = '*';
        nField[Math.floor(Math.random() * x)][Math.floor(Math.random() * x)] = '^';

        return nField;  
    }

}

const generatedField = Field.generateField(6,10);
const myField = new Field(generatedField);


//Runs the game until you loose or win  
const playGame = () => {
    myField.printField();

    while(myField.loose === false && myField.win === false){    
        const playerMove = prompt('Which direction?:'); 
        myField.setPosition(playerMove);
        myField.displayMovement(myField.getPosition(myField._myField),myField.getHoles(myField._myField));
        myField.printField();
    }
    
    if(myField.loose === true){
        console.log('\nBetter Luck next time!\n');
    }else if(myField.win === true){
        console.log('\nYou did it!\n');
    }
}

playGame();





