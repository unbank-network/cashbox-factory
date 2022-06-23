import { verifyContract } from "./common/verify-contract";

async function main() {
  // Enter the Factory Address
  const factoryAddress = "0x2Dd932e0d15CDB1Ceaa0Ba97642fD8773850bEb6";

  console.log("Verifying:", factoryAddress);
  try {
    await verifyContract(factoryAddress, []);
    console.log("Done! Verified:", factoryAddress);
  } catch (error: any) {
    console.log("Error on Verification:", factoryAddress, error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: any) => {
    console.error(error);
    process.exit(1);
  });
