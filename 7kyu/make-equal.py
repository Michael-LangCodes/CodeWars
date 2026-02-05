# Given an array of integers a and integers t and x, count how many elements in the array you can make equal to t by increasing / decreasing it by x (or doing nothing). EASY!

# # ex 1

# a = [11, 5, 3]
# t = 7
# x = 2

# count(a, t, x) # => 3
# you can make 11 equal to 7 by subtracting 2 twice
# you can make 5 equal to 7 by adding 2
# you can make 3 equal to 7 by adding 2 twice
# # ex 2

# a = [-4,6,8]
# t = -7
# x = -3

# count(a, t, x) # => 2
# Constraints
# -1018 <= a[i],t,x <= 1018

# 3 <= |a| <= 104

# My Solution
def count(a, t, x):
    out = 0
    for i in range(len(a)):
        if x == 0: 
            if a[i]%t == 0:
                out = out + 1
        elif (a[i] - t) % x == 0:
            out = out + 1
        else:
            pass
    return out