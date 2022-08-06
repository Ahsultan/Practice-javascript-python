import json
with open('python-practice\libarty_school.json', 'r') as file:
    school_data = json.load(file)
#print(school_data)
for student in school_data["students"]:
  if (student["marks"]["Mathematics"] == "A") and (student["marks"]["Science"] == "A"):
    print(student["name"])

print(json.dumps(school_data, indent=4))