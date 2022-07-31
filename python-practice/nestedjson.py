employee = {
  "employees": [
    {
      "name": "Emma",
      "Position": "Senior Software Devoloper",
      "age": 43
    }, 
    {
      "name": "Sultan",
      "Position": "Junior Software Devoloper",
      "age": 25
    }
  ],
  "departments": [
    {
      "name": "sales",
      "number_of_employees":142
    },
  ],
  "shops":[
    {
        "name": "NatLus",
        "number_emp" : 22,

    },
    {
        "name": "More Mega Store",
        "number_emp" : 220,

    },
  ]
}

for x in employee["shops"]:
    #print(x["number_emp"])
    if (x["name"]) == 'More Mega Store':
       print(x["number_emp"])

for x in employee["employees"]:
  if x["name"] == "Sultan":
    print(x["Position"], x["age"])