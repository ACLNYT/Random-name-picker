import random

def random_name_guesser():
  """Generates a random name."""
  names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack"]
  random_name = random.choice(names)
  return (f'your name is {random_name}') 
print(random_name_guesser())
