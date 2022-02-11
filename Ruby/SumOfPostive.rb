# // INSTRUCTIONS (8 kyu)

# // You get an array of numbers, return the sum of all of the positives ones.

# // Example [1,-4,7,12] => 1 + 7 + 12 = 20

# // Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr)
    answer = []
#     start = 0
   for i in arr do
    if i > 0
        answer << [i]
    end
   end
#    puts answer.map(&:to_integer).reduce(0, :+)
    puts answer.respond_to?(:to_i)
end

positive_sum([1,-4,7,12])