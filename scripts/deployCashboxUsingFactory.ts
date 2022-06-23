const { ethers } = require("hardhat");
import { verifyContract } from "./common/verify-contract";
import { numToWei } from "../utils/utils";

async function main() {
  // DeployFactory contract address
  const factoryAddress = "0xb91FB36c4470A40D03B255dbe0A3b05B07829A95";

  // Set createCashBox() arguments
  const contructorArguments = {
    cashTokenAddress: "0x3E92b8ed3d3aF199b8325ad0BD9b69eE0F8D195A",
    assetTokenAddress: "0x4e2F919B06523FA9D6e58160B165b1A9F4CC26E2",
    nftFactoryAddress: "0xd5C8007e9195B1452A5C1A0d66382F1fA30a3161",
    assetToCashRate: 1,
    cashCap: numToWei("10000", 18),
    name: "CashBox AREIT",
    symbol: "CB22",
    url: "",
  };

  const cashboxFactory = await ethers.getContractAt(
    "DeployFactory",
    factoryAddress
  );

  let tx1;
  try {
    console.log("Calling createCashBox() with params:", contructorArguments);
    tx1 = await cashboxFactory.createCashBox(
      contructorArguments.cashTokenAddress,
      contructorArguments.assetTokenAddress,
      contructorArguments.nftFactoryAddress,
      contructorArguments.assetToCashRate,
      contructorArguments.cashCap,
      contructorArguments.name,
      contructorArguments.symbol,
      contructorArguments.url
    );
  } catch (error) {
    console.log("Error creating Cashbox", error);
  }

  console.log("txn:", tx1.hash);
  await tx1.wait(3);

  const boxes: any[] = await cashboxFactory.getAllCashBoxes();

  console.log("Deployed a new Cashbox:", boxes[boxes.length - 1]);
  console.log("List of all Cashboxes:", boxes);
}

main()
  .then(() => process.exit(0))
  .catch((error: any) => {
    console.error(error);
    process.exit(1);
  });
