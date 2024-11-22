import { TrieNode } from "./TrieNode";

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Clears all the nodes in the Trie
   */
  clear(): void {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the Trie
   * @param word - The word to insert
   */
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  /**
   * Searches for all words in the Trie with the given prefix
   * @param prefix - The prefix to search
   * @returns An array of words matching the prefix
   */
  search(prefix: string): string[] {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this._findAllWords(node, prefix);
  }

  /**
   * Finds all words starting from the given node
   * @param node - The TrieNode to start searching from
   * @param prefix - The current prefix being constructed
   * @returns An array of words
   */
  private _findAllWords(node: TrieNode, prefix: string): string[] {
    let words: string[] = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }
    for (const char in node.children) {
      words = words.concat(
        this._findAllWords(node.children[char], prefix + char)
      );
    }
    return words;
  }
}
