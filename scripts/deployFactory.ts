const { ethers } = require("hardhat");
import { verifyContract } from "./common/verify-contract";
import { numToWei } from "../utils/utils";

async function main() {
  const DeployFactory = await ethers.getContractFactory("DeployFactory");
  console.log("Deploying DeployFactory..");
  const deployFactory = await DeployFactory.deploy();
  await deployFactory.deployed();
  console.log("DeployFactory deployed to:", deployFactory.address);

  {
    /*
  Uncomment below code if you want to create one Cashbox, right as you deploy the factory.
    */
  }

  // const contructorArguments = {
  //   cashTokenAddress: "0x3E92b8ed3d3aF199b8325ad0BD9b69eE0F8D195A",
  //   assetTokenAddress: "0x4e2F919B06523FA9D6e58160B165b1A9F4CC26E2",
  //   nftFactoryAddress: "0xd5C8007e9195B1452A5C1A0d66382F1fA30a3161",
  //   assetToCashRate: 1,
  //   cashCap: numToWei("10000", 18),
  //   name: "CashBox AREIT",
  //   symbol: "CB20",
  //   url: "https://ipfs.io/ipfs/QmZFNvPYgTq7XcKgNNXFRYbiTBM4Z4ZMRK7QuqYfzhUGpR/AREIT%20Information%20Memorandum%20October%202020.pdf",
  // };

  // console.log("Calling createCashBox() with params:", contructorArguments);
  // const tx1 = await deployFactory.createCashBox(
  //   contructorArguments.cashTokenAddress,
  //   contructorArguments.assetTokenAddress,
  //   contructorArguments.nftFactoryAddress,
  //   contructorArguments.assetToCashRate,
  //   contructorArguments.cashCap,
  //   contructorArguments.name,
  //   contructorArguments.symbol,
  //   contructorArguments.url
  // );
  // console.log("txn:", tx1.hash);
  // await tx1.wait(3);
  // const boxes: any[] = await deployFactory.getAllCashBoxes();
  // console.log("Cashboxes:", boxes);

  {
    /* Only contract verification below */
  }

  {
    /*
  The code commented below is for verifying contracts. It does not seem to work atm because of txn mining time.
  Enter correct arguments in verifyDeployFactory.ts and verifyCashbox.ts contants
  and run those scripts few minutes later instead.
    */
  }

  // Verify Factory //

  // console.log("Verifying deployFactory.address:", deployFactory.address);
  // try {
  //   await verifyContract(deployFactory.address, []);
  //   console.log("Done! Verified deployFactory.address:", deployFactory.address);
  // } catch (error: any) {
  //   console.log(
  //     "ERROR on Verification of deployFactory.address:",
  //     deployFactory.address,
  //     error
  //   );
  // }

  // Verify Cashbox deployed by the factory //

  // if (boxes.length > 0) {
  //   console.log("Verifying Cashbox:", boxes[boxes.length]);
  //   try {
  //     await verifyContract(boxes[boxes.length - 1], [
  //       contructorArguments.cashTokenAddress,
  //       contructorArguments.assetTokenAddress,
  //       contructorArguments.nftFactoryAddress,
  //       contructorArguments.assetToCashRate,
  //       contructorArguments.cashCap,
  //       contructorArguments.name,
  //       contructorArguments.symbol,
  //       contructorArguments.url,
  //     ]);
  //     console.log("Done! Verified Cashbox", boxes[boxes.length]);
  //   } catch (error: any) {
  //     console.log(
  //       "ERROR on Verification of Cashbox:",
  //       boxes[boxes.length],
  //       error
  //     );
  //   }
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error: any) => {
    console.error(error);
    process.exit(1);
  });
