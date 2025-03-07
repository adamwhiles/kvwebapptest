import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

export async function getSecrets() {
    const keyVaultUrl = process.env.KEY_VAULT_URL;
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(keyVaultUrl, credential);
    const secret = await client.getSecret("supersecretsecret");

    console.log(secret.value);

    return {secret: secret.value};
}