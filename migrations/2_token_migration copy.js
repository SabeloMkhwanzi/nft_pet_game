const Token = artifacts.require("Token");

module.exports = async function(deployer) {
   await deployer.deploy(Token, "NFG Game", "NFTG");
   let tokenInstance = await Token.deployed();
   await tokenInstance.mint(100, 200, 1000); //Token id 0
   await tokenInstance.mint(255, 100, 2000); //Token id 1
   await tokenInstance.mint(155, 100, 2000); //Token id 2
   let pet = await tokenInstance.getTokenDetails(1);
   console.log(pet);
};
