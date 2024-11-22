import { Trie } from "../dataStructures/Trie";

export const trie = new Trie();

export const initializeTrie = (criticalEvents: string[]) => {
  trie.clear();
  criticalEvents.forEach((event) => trie.insert(event));
};
