import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

export async function getSecrets() {
  const keyVaultUrl = process.env.KEY_VAULT_URL;
  const credential = new DefaultAzureCredential();
  const client = new SecretClient(keyVaultUrl, credential);
  let secret = "";
  let secret2 = "";
  try {
    secret = await client.getSecret(process.env.SECRET_1);
  } catch (error) {
    console.log("Error: Unable to retrieve secret.");
  }
  try {
    secret2 = await client.getSecret(process.env.SECRET_2);
  } catch (error) {
    console.log("Error: Unable to retrieve secret");
  }
  return {
    secret: secret.value || "Error: Unable to retrieve secret.",
    secret2: secret2.value || "Error: Unable to retrieve secret.",
  };
}
