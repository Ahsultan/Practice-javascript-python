import json
data = {
  'people': [
    {'name': 'Scott', 'website': 'stackabuse.com', 'from': 'Nebraska'}, 
    {'name': 'Larry', 'website': 'google.com', 'from': 'Michigan'}, 
    {'name': 'Tim', 'website': 'apple.com', 'from': 'Alabama'}
  ]
}

print(json.dumps(data, indent=4))