'''
DESCRIPTION:
In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.
'''


class Jar:
    def __init__(self):
        self.amount = 0
        self.kind_amount = dict()

    # Método para adicionar e calcular as unidades de cada sabor
    def add(self, amount, kind):
        total = amount
        for k, v in self.kind_amount.items():
            if kind == k:
                total += self.kind_amount[kind]
        self.kind_amount.update({kind: total})
        self.amount += amount

    # Método para calcular a retirada de suco e manter as concentrações calculadas
    def pour_out(self, amount):
        total = self.amount - amount
        for k, v in self.kind_amount.items():
            self.kind_amount[k] = total * self.get_concentration(k)
        self.amount = total

    # Método para extrair total de unidades
    def get_total_amount(self):
        return self.amount

    # Método para calcular concentração
    def get_concentration(self, kind):
        return ((self.kind_amount[kind]) / self.amount) if kind in self.kind_amount else 0