const wOne = ((req, res) => {
    console.log("in wOne");
    res.json("in wOne");
})

const wTwo = ((req, res) => {
    console.log("in wTwo");
    res.json("in wTwo");
})
module.exports = { wOne, wTwo }