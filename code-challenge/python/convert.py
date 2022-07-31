#L G T Ml

one_liter_ml = 1000.00
one_liter_teaspoon = 202.884
one_liter_gallons = 0.2641720524

def convert_to_litter(convert_from, value):
    liters = 0
    if convert_from == 'L':
        liters =  value
    if convert_from == 'ml':
        liters =  value / one_liter_ml
    if convert_from == 'g':
        liters =  value / one_liter_gallons
    if convert_from == 't':
        liters =  value / one_liter_teaspoon

    return liters
    
def solution(value, convert_to, convert_from):
    if convert_to == 'L':
        return convert_to_litter(convert_from, value)
    if convert_to == 't':
        return convert_to_litter(convert_from, value) * one_liter_teaspoon
    if convert_to == 'g':
        return convert_to_litter(convert_from, value) * one_liter_gallons
    if convert_to == 'ml':
        return convert_to_litter(convert_from, value) * one_liter_ml

convert_from = input('Which unit you would like to convert from? ')
convert_to= input('Which unit you would like to convert to? ')
value = float(input('Enter your value : '))

result = solution(value, convert_to, convert_from)

print(f"Thanks! {value} {convert_from} is equal to {result} {convert_to}")