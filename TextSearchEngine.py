import re

class TextSearchEngine:
    def __init__(self, documents):
        self.documents = documents

    def search(self, query):
        # Preprocess the query: convert to lowercase and extract alphanumeric words
        query_words = re.findall(r'\b\w+\b', query.lower())

        # Initialize a list to store matching document indices
        matching_indices = []

        

        return matching_indices