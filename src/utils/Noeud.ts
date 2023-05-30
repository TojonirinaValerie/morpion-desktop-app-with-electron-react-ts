export type NodeValue = 1 | -1 | 0;

export interface NodeI {
  case: NodeValue[];
  tour: -1 | 1;
}

// const defaultValue: NodeI = {
//   case: [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   // case: new Array(9),
//   tour: 1
// }
class Noeud {

  // private node: NodeI = defaultValue;
  case: NodeValue[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  tour: -1 | 1 = 1;

  private static indiceMeilleurCoup: number = 0;

  constructor(_case?: NodeValue[], _tour?: -1|1) {
    if(_case) this.case = _case;
    if(_tour) this.tour = _tour;
  }

  isFull(): boolean {
    let cases: NodeValue[] = this.case;
    for (let i = 0; i < 9; i++) {
      if (cases[i] === 0) return false;
    }
    return true;
  }

  eval(nous: 1|-1):number {
    let cases: NodeValue[] = this.case;

    //mitsivalana
    if (cases[0] === cases[1] && cases[1] === cases[2] && cases[2] !== 0)
      return nous * cases[0] * 100;
    if (cases[3] === cases[4] && cases[4] === cases[5] && cases[5] !== 0)
      return nous * cases[3] * 100;
    if (cases[6] === cases[7] && cases[7] === cases[8] && cases[8] !== 0)
      return nous * cases[6] * 100;

    //mitsangana
    if (cases[0] === cases[3] && cases[3] === cases[6] && cases[6] !== 0)
      return nous * cases[0] * 100;
    if (cases[1] === cases[4] && cases[4] === cases[7] && cases[7] !== 0)
      return nous * cases[1] * 100;
    if (cases[2] === cases[5] && cases[5] === cases[8] && cases[8] !== 0)
      return nous * cases[2] * 100;

    //misopirana
    if (cases[0] === cases[4] && cases[4] === cases[8] && cases[8] !== 0)
    return nous * cases[0] * 100;
    if (cases[2] === cases[4] && cases[4] === cases[6] && cases[6] !== 0)
    return nous * cases[2] * 100;
    
    return 0;
  }

  isTerminal(): boolean {
    if ( this.eval(1) !== 0 ) return true;
    if ( this.isFull() === true ) return true;
    return false;
  }
  
  isMax(nous: 1|-1): boolean{
    return this.tour === nous;
  }

  getMark(value: 0 | 1| -1): string{
    if(value===1) return 'X';
    if(value===-1) return 'O';
    return ' '
  }

  toString(indent: number){
    let result: string = '';
    let indentString: string = '';
    for(let i=0; i<indent; i++){
      indentString += '   ';
    }
    result+= `${indentString}eval = ${this.eval(-1)}\n`;
    result+= `${indentString}|${this.getMark(this.case[0])}|${this.getMark(this.case[1])}|${this.getMark(this.case[2])}|\n`;
    result+= `${indentString}|${this.getMark(this.case[3])}|${this.getMark(this.case[4])}|${this.getMark(this.case[5])}|\n`;
    result+= `${indentString}|${this.getMark(this.case[6])}|${this.getMark(this.case[7])}|${this.getMark(this.case[8])}|\n`;
    result+='\n\n'
    return result;
  }
  
  getSucc(): Array<Noeud>{

    let listSucc: Array<Noeud> = new Array<Noeud>();

    for( let i = 0; i < 9; i++){
      if(this.case[i] === 0 ) {
        listSucc.push(this.createSucc(i));
      }
    }

    return listSucc;
  }

  createSucc(index: number): Noeud{

    let succ = new Noeud([...this.case], this.tour);

    succ.case[index] = succ.tour;

    if(succ.tour===1) succ.tour = -1;
    else{
      if(succ.tour===-1) succ.tour = 1;
    }

    // console.log('eval == '+succ.eval(-1), succ);
    
    return succ;

  }

  addMarkAt(index: number): Noeud{
    let newNode = new Noeud([...this.case], this.tour);
    newNode.case[index] = newNode.tour;

    if (newNode.tour === 1) newNode.tour = -1;
    else {
      if (newNode.tour === -1) newNode.tour = 1;
    }
    return newNode;
  }

  static createNewNode(tour?: 1 | -1): Noeud{
    if(!tour) tour = 1;
    return new Noeud([0, 0, 0, 0, 0, 0, 0, 0, 0], tour);
  }

  static parcoursProfondeur(noeud: Noeud, depth: number){
    
    
    if(depth===1) return noeud.eval(1);

    let successeurs = noeud.getSucc();
    successeurs.forEach(succ => {
      this.parcoursProfondeur(succ, depth-1);
    });
    
  }

  
  static minimax(noeud: Noeud, depth: number): number{
    // let space = '';
    // for(let i = 0; i< 9-depth; i++){
    //   space+='    ';
    // }
    // console.log(space, 'profondeur : '+depth);
    
    if(depth===0 || noeud.isTerminal()) return noeud.eval(-1);

    if(noeud.isMax(-1)){

      let val: number = -1000;
      let successeurs = noeud.getSucc();
      
      successeurs.forEach( (succ: Noeud, index: number) =>{
        let current = this.minimax(succ, depth-1);
        val = Math.max(val, current);
      });

      return val;

    }
    else{

      let val: number = 1000;
      let successeurs = noeud.getSucc();

      successeurs.forEach( (succ: Noeud, index: number) =>{
        let current = this.minimax(succ, depth-1);
        val = Math.min(val, current);
      });
      
      return val;

    }

  }

  // static minimax(noeud: Noeud, depth: number): number{
    
  //   // let space = '';
  //   // for(let i = 0; i< 9-depth; i++){
  //   //   space+='    ';
  //   // }

  //   if(depth===0 || noeud.isTerminal()) {
  //     // console.log(noeud.eval(-1), noeud);
      
  //     return noeud.eval(-1);
  //   }
  //   if(noeud.isMax(-1)){
  //     let val: number = -1000;
  //     let successeurs = noeud.getSucc();
      
  //     successeurs.forEach( (succ: Noeud, index: number) =>{

  //       let last = val;
  //       let current = this.minimax(succ, depth-1);

  //       val = Math.max(val, current);

  //       if(val!==last){
  //         Noeud.indiceMeilleurCoup = index;
  //       }

  //       console.log(current);
  //       console.log(succ.toString(9-depth));
  //     })

  //     return val;
  //     console.log(val);

  //   }
  //   else{
  //     let val: number = 1000;
  //     let successeurs = noeud.getSucc();

  //     successeurs.forEach( (succ: Noeud, index: number) =>{

  //       let last = val;
  //       let current = this.minimax(succ, depth-1);
        
  //       val = Math.min(val, current);

  //       if(val!==last){
  //         Noeud.indiceMeilleurCoup = index;
  //       }
        
  //       console.log(current);
  //       console.log(succ.toString(9-depth));
  //     })
      
  //     console.log(val);
      
  //     return val;

  //   }

    
    
  // }

  static getAiMove(noeud: Noeud, depth: number): Noeud{
    Noeud.minimax(noeud, depth);
    let successeurs = noeud.getSucc();
    return successeurs[Noeud.indiceMeilleurCoup];
  };

  static findBestMove(noeud: Noeud, depth: number){
    let bestVal = -1000;
    let bestMove: Noeud = noeud;

    let successeurs = noeud.getSucc();

    successeurs.forEach( (succ: Noeud, index: number) =>{
      let moveVal = Noeud.minimax(succ, depth-1);
      console.log(moveVal, succ);
      
      if(moveVal>bestVal){
        bestMove = succ;
        bestVal = moveVal;
      }
    });
    return bestMove;
  }

}

export default Noeud;