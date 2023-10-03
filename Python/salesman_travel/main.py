'''
DESCRIPTION:

A traveling salesman has to visit clients. He got each client's address e.g.
"432 Main Long Road St. Louisville OH 43071" as a list.
The basic zipcode format usually consists of two capital letters followed by a white space and five digits.
The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :
"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task

The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode
and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.
If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples:

r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
'''


def travel(r, zipcode):
    # Separa os endereços e guarda em uma lista
    addresses = r.split(',')
    street = ''
    num = ''
    
    # Itera sobre cada endereço
    for address in addresses:
        # Segue apenas com códigos postais válidos
        if zipcode in address and len(zipcode) == 8:
            # Concatena as ruas e números do mesmo código postal em strings separadas
            if not street:
                street = (address[address.index(' '):address.index(zipcode)].strip())
                num = (address[0:address.index(' ')])
            else:
                street += ',' + (address[address.index(' '):address.index(zipcode)].strip())
                num += ',' + (address[0:address.index(' ')])
    # Se o código for inválido, devolve o próprio, senão, retorna os endereços formatados
    res = f"{zipcode}:{street}/{num}"
    return res



