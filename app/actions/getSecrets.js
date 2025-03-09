import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

export async function getSecrets() {
  const keyVaultUrl = process.env.KEY_VAULT_URL;
  const credential = new DefaultAzureCredential();
  const client = new SecretClient(keyVaultUrl, credential);
  let secret = "";
  let secret2 = "";
  try {
    secret = await client.getSecret("supersecretsecret");
  } catch (error) {
    secret = error;
  }
  try {
    secret2 = await client.getSecret("supersecretsecret2");
  } catch (error) {
    secret2 = error;
  }

  console.log(secret.value);
  console.log(secret2.value);

  return {
    secret: secret.value || secret.message,
    secret2: secret2.value || secret2.message,
  };
}
