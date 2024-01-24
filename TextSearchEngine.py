import re

class TextSearchEngine:
    def __init__(self, documents):
        self.documents = documents

    def search(self, query):
        # Preprocess the query: convert to lowercase and extract alphanumeric words
        query_words = re.findall(r'\b\w+\b', query.lower())

        # Initialize a list to store matching document indices
        matching_indices = []
        # Iterate through each document and check if it contains all query words
        for i, document in enumerate(self.documents):
            # Preprocess the document: convert to lowercase and extract alphanumeric words
            document_words = re.findall(r'\b\w+\b', document.lower())

            # Check if all query words are present in the document
            if all(word in document_words for word in query_words):
                matching_indices.append(i)

        return matching_indices

documents = [
    "Python is a powerful programming language.",
    "Machine learning is a subset of artificial intelligence.",
    "Python is widely used in data science.",
    "Natural language processing is an exciting field in AI."
]

search_engine = TextSearchEngine(documents)
result = search_engine.search("Python language")
print(result)