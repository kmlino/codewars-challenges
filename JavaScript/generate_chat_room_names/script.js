function generateChatRoomNames(users) {
  return ((users.map((user) => {

    // Itera sobre cada usuário e checa se o nome ou primeira letra do sobrenome repete no array de usuários.
    let [name, lName] = user.split(' ');
    let countName = users.filter((n) => n.split(' ')[0] === name).length;
    let countLastName = users.filter((s) => s.split(' ')[0] === name && s.split(' ')[1][0] === lName[0]).length;
    
    // Retorna o "chat-name" prevenindo qualquer repetição entre os outros usuários no array.
    return countName > 1 && countLastName > 1 ? name.toLowerCase() + ' ' + lName
    : countName > 1 && countLastName == 1 ? name.toLowerCase() + ' ' + lName[0].toUpperCase()
    : name.toLowerCase()

  // O método map() aqui é usado para garantir que as siglas de sobrenome estejam em maiúsculo.
  }).map((user) => user.replace(user.split(' ')[0][0], user.split(' ')[0][0].toUpperCase())).sort()))
}