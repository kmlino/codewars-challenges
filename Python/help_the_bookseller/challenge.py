'''A bookseller has lots of books classified in 26 categories labeled A, B, ... Z.
Each book has a code c of 3, 4, 5 or more characters.
The 1st character of a code is a capital letter which defines the book category.
In the bookseller's stocklist each code c is followed by a space and by a positive
 integer n (int n >= 0) which indicates the quantity of books of this code in stock.'''

def stock_list(artcs, catgs):
    priced_catgs = {}
    result = ''
    # Itera sobre as duas listas recebidas e faz as validações conforme a regra do desafio
    for artc in artcs:
        for catg in catgs:
            # Se houver a categoria no dict(), ele atualiza somando os 'values', caso contrário, a categoria é criada
            if artc[0] == catg and catg not in priced_catgs:
                priced_catgs.update({catg: int(artc.split(' ')[1])})
            elif artc[0] == catg and catg in priced_catgs:
                priced_catgs[artc[0]] += int(artc.split(' ')[1])
            elif artc[0] != catg and catg not in priced_catgs:
                priced_catgs.update({catg: 0})
    # Converte resultado para uma string
    for priced in priced_catgs:
        result += ('(' + priced + ' : ' + str(priced_catgs[priced]) + ')')
        # Validação para não haver '-' após a última categoria precificada
        if priced != catgs[-1]:
            result += ' - '
    return result

articles = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
categories = ["A", "B", "D"]

r = stock_list(articles, categories)

print(r)
