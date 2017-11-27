export class Block {
    category: string;
    color: string;
    selected: boolean = false;

    constructor (block?: Block) {
        if (block != undefined) {
            this.category = block.category;
            this.color = block.color;
            this.selected = block.selected;
        } 
    }
}