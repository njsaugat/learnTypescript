var role = [1, 'admin'];
// role[0]='sfd';// --> throws error
role[0] = 213;
console.log(role.forEach(function (r) { return console.log(r); }));
