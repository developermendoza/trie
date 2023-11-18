class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }
}

const myTrie = new Trie();

// Insert words into the Trie
myTrie.insert("apple");
myTrie.insert("app");
myTrie.insert("apricot");
myTrie.insert("banana");

// Search for words in the Trie
console.log("Search for 'app':", myTrie.search("app")); // Outputs: true
console.log("Search for 'appl':", myTrie.search("appl")); // Outputs: false
console.log("Search for 'banana':", myTrie.search("banana")); // Outputs: true
console.log("Search for 'grape':", myTrie.search("grape")); // Outputs: false
