
exports.seed = async function(knex) {
  // clears out the table so we can start fresh
  // truncate does more than .del(), like resetting the autoincrement counts
  await knex("fruits").truncate()
  await knex("fruits").insert([
    { id:"1" ,name: "dragon fruit", avWeightOz: 16.7, delicious: true, color: "red"},
    { id:"2",name: "durian", avWeightOz: 52.7, delicious: false, color: "yellow"},
    { id:"3", name: "rambutan", avWeightOz: 16.7, delicious: true, color: "pink"},
    { id:"4",name: "lingonberry", avWeightOz: 16.7, delicious: true, color: "red"},
    { id:"5",name: "golden gooseberry", avWeightOz: 0.3, delicious: false, color: "yellow"},
  ])

};

// THIS IS BASICALLY SOME TEST DATA 

