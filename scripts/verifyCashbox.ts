const { ethers, upgrades } = require("hardhat");
import { verifyContract } from "./common/verify-contract";
import { numToWei } from "../utils/utils";

async function main() {
  // Enter the Cashbox Address
  const cashboxAddress = "0x3dDB257a626711F562d207d1a74b90D6E6484e08";

  // Enter the Cashbox Arguments which you passed to the createCashBox() on DeployFactory contract
  const contructorArguments = {
    cashTokenAddress: "0x3E92b8ed3d3aF199b8325ad0BD9b69eE0F8D195A",
    assetTokenAddress: "0x4e2F919B06523FA9D6e58160B165b1A9F4CC26E2",
    nftFactoryAddress: "0xd5C8007e9195B1452A5C1A0d66382F1fA30a3161",
    assetToCashRate: 1,
    cashCap: numToWei("10000", 18),
    name: "CashBox AREIT",
    symbol: "CB20",
    url: "https://ipfs.io/ipfs/QmZFNvPYgTq7XcKgNNXFRYbiTBM4Z4ZMRK7QuqYfzhUGpR/AREIT%20Information%20Memorandum%20October%202020.pdf",
  };

  console.log("Verifying:", cashboxAddress);
  try {
    await verifyContract(cashboxAddress, [
      contructorArguments.cashTokenAddress,
      contructorArguments.assetTokenAddress,
      contructorArguments.nftFactoryAddress,
      contructorArguments.assetToCashRate,
      contructorArguments.cashCap,
      contructorArguments.name,
      contructorArguments.symbol,
      contructorArguments.url,
    ]);
    console.log("Done! Verified:", cashboxAddress);
  } catch (error: any) {
    console.log("Error on Verification:", cashboxAddress, error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: any) => {
    console.error(error);
    process.exit(1);
  });
