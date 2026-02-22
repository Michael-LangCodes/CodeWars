# You have a messy fridge! To prevent food waste, you need to decide what to eat first based on two factors: expiry date and quantity.

# Write a function fridge_organizer that takes a list of food items and returns their names sorted by Urgency Score.

# Data Format
# Each item is a FoodItem object with the following attributes:

# item.name: (string) The name of the food.
# item.expiry_days: (int) Days until it expires (can be negative).
# item.is_almost_empty: (boolean) True if you only have a little bit left.
# Sorting Rules
# Discard Spoiled: If expiry_days is less than 0, the item is spoiled. Do not include it in the output.
# Empty First: Items that are is_almost_empty come before items that are not.
# Expiry: Within those groups, items with the lowest expiry_days come first.
# Alphabetical: If both status and expiry are the same, sort by name alphabetically.
# Example
# fridge = [
#   FoodItem("Milk", 3, False),
#   FoodItem("Jam", 3, True),
#   FoodItem("Yogurt", 1, False)
# ]
# Result: ["Jam", "Yogurt", "Milk"] 

#My Solution
def fridge_organizer(items):
    filtered_items = list(filter(lambda x: x.expiry_days >= 0, items))
    print(filtered_items)
    new = sorted(filtered_items, key=lambda item: item.name)
    new = sorted(new, key=lambda item: item.expiry_days)
    new = sorted(new, key=lambda item: item.is_almost_empty, reverse = True)
    output = []
    for i in range(len(new)):
        output.append(new[i].name)
    return output