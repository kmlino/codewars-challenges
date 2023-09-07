function generateChatRoomNames(users) {
    let arr = [];
    for (user of users) {
      [name, lName] = user.split(' ');
      sig = lName[0];
      arr.push(
          users.filter((n) => n.split(' ')[0] === name).length > 1 &&
          users.filter((s) => s.split(' ')[0] === name && s.split(' ')[1][0] === sig).length > 1 ?
          name.toLowerCase() + ' ' + lName
          : users.filter((n) => n.split(' ')[0] === name).length > 1 && 
          users.filter((s) => s.split(' ')[0] === name && s.split(' ')[1][0] === sig).length == 1 ? 
          name.toLowerCase() + ' ' + sig.toUpperCase()
          : name.toLowerCase()
        )
    }
    return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).sort() 
}