const hre = require("hardhat");
//HELPER FUNCTION TO CONVERT ETHER TO WEI
const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //DEPLOY TOKEN CONTRACT
  const _initialSupply = tokens(50000000);

  const TheMihirVishwakarma = await hre.ethers.getContractFactory(
    "TheMihirVishwakarma"
  );
  const theMihirVishwakarma = await TheMihirVishwakarma.deploy(_initialSupply);

  await theMihirVishwakarma.deployed();
  console.log(`TheMihirVishwakarma: ${theMihirVishwakarma.address}`);

  //TOKEN SALE CONTRACT
  const _tokenPrice = tokens(1);

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(
    theMihirVishwakarma.address,
    _tokenPrice
  );

  await tokenSale.deployed();
  console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
