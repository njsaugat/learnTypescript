let role: [number, string] = [1, 'admin'];

// role[0]='sfd';// --> throws error

role[0] = 213;
console.log(role.forEach((r) => console.log(r)));
