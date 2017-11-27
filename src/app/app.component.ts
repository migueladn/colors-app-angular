import { Component } from '@angular/core';
import { Block } from './_models/block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend Javascript Test';
  blocks : Block[] = [];
  colors: String[] = ["blue", "green", "yellow", "orange", "red", "purple"];

  constructor() {
    for (let i = 0; i < 25; i++) {
      let block = new Block();
      let categories = ["a","b","c","d"];
      block.category = categories[Math.floor(Math.random() * categories.length)];
      this.blocks[i] = block;
    }
  }

  // Click on blocks, will toggle highlight on all blocks of the same type.
  selectBlocks(category: string) {
    for (let block of this.blocks) {
      (block.category == category) ? block.selected = true : block.selected = false;
    }
  }

  // Click on a `Color` action button, will change the background color for all selected blocks (if any).
  colorize(color: string) {
    for (let block of this.blocks) {
      if (block.selected) {
        block.color = color;
        block.selected = false;
      }
    }
  }

  // Click on `C` action button will clear all blocks backgrounds.
  clear() {
    for (let block of this.blocks) {
      block.color = undefined;
      block.selected = false;
    }
  }

  // Click on `R` action button will randomize the blocks: change the blocks order randomly.
  randomize() {
    this.blocks  = this.shuffle(this.blocks);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  } 
  
  // Click on `S` action button will alphabetically sort all the blocks.
  sort() {
    this.blocks.sort((a,b) => a.category.localeCompare(b.category));
  }


}
