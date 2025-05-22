function anagramChecker(word1, word2) {
  document.getElementById('results-text').classList.add('hidden');
  document.getElementById('results-forgot').classList.add('hidden');

	if (word1.replace(/\s+/g, '') === word2.replace(/\s+/g, '')) {
  	return
  }

	if (word1.toLowerCase() === word2.toLowerCase()) {
    document.getElementById('results-idiot').classList.remove('hidden');
    return
  } else if (word1.toLowerCase() !== word2.toLowerCase()) {
      document.getElementById('results-idiot').classList.add('hidden');
  }
  
  if (word1.replace(/\s+/g, '').length < 1 || word2.replace(/\s+/g, '').length < 1) {
  	    document.getElementById('results-forgot').classList.remove('hidden');
        return
  }

  let word1Sorted = word1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  let word2Sorted = word2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  
  document.getElementById('results-text').classList.remove('hidden');

  if (word1Sorted === word2Sorted) {
    document.getElementById('results-are').classList.remove('hidden');
    document.getElementById('results-arent').classList.add('hidden');
    console.log('the words are anagrams!');
  } else {
    document.getElementById('results-arent').classList.remove('hidden');
    document.getElementById('results-are').classList.add('hidden');
    console.log('the words are not anagrams!')
  }
}
