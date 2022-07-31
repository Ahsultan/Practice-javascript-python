#test.py
name = 'Sultan Ahmed'
avatar = ''

for i in range(len(name)):
    if name[i] == ' ':
        continue
    if name[i] == name[i].upper():
        avatar += name[i]
    if len(avatar) == 2:
        break

print(avatar)