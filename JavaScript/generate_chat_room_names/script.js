function generateChatRoomNames(users) {
    return ((users.map((user) => {
      let [name, lName] = user.split(' ');
      let countName = users.filter((n) => n.split(' ')[0] === name).length
      let countLastName = users.filter((s) => s.split(' ')[0] === name && s.split(' ')[1][0] === lName[0]).length
      return countName > 1 && countLastName > 1 ? name.toLowerCase() + ' ' + lName
      : countName > 1 && countLastName == 1 ? name.toLowerCase() + ' ' + lName[0].toUpperCase()
      : name.toLowerCase() 
    }).map((user) => user.replace(user.split(' ')[0][0], user.split(' ')[0][0].toUpperCase())).sort()))
  }