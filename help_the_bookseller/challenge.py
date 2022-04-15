'''A bookseller has lots of books classified in 26 categories labeled A, B, ... Z.
Each book has a code c of 3, 4, 5 or more characters.
The 1st character of a code is a capital letter which defines the book category.
In the bookseller's stocklist each code c is followed by a space and by a positive
 integer n (int n >= 0) which indicates the quantity of books of this code in stock.'''

def stock_list(listOfArt, listOfCat):
    dic = {}
    res = ''
    for art in listOfArt:
        for cat in listOfCat:
            if art[0] == cat and cat not in dic:
                dic.update({cat: int(art.split(' ')[1])})
            elif art[0] == cat and cat in dic:
                dic[art[0]] += int(art.split(' ')[1])
            elif art[0] != cat and cat not in dic:
                dic.update({cat: 0})
    for d in dic:
        res += ('(' + d + ' : ' + str(dic[d]) + ')')
        if d != listOfCat[-1]:
            res += ' - '
    return res

articles = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
categories = ["A", "B", "D"]

r = stock_list(articles, categories)

print(r)
