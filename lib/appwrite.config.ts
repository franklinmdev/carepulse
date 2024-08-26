import { Client, Databases, Users, Messaging, Storage } from "node-appwrite";

const client = new Client();

const initClient = () => {
    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
    const projectId = process.env.PROJECT_ID;
    const apiKey = process.env.API_KEY;

    console.log('Appwrite Config:', { endpoint, projectId: projectId ? '[REDACTED]' : undefined, apiKey: apiKey ? '[REDACTED]' : undefined });

    if (!endpoint || !projectId || !apiKey) {
        console.error("Appwrite configuration is missing");
        return false;
    }

    client
        .setEndpoint(endpoint)
        .setProject(projectId)
        .setKey(apiKey);

    return true;
};

const isInitialized = initClient();

let databases, users, messaging, storage;

if (isInitialized) {
    databases = new Databases(client);
    users = new Users(client);
    messaging = new Messaging(client);
    storage = new Storage(client);
}

export { databases, users, messaging, storage };

// Export environment variables that are safe to use on the client-side
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

// Function to get server-side only variables
export const getServerConfig = () => ({
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
    DATABASE_ID: process.env.DATABASE_ID,
    PATIENT_COLLECTION_ID: process.env.PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID: process.env.DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID: process.env.APPOINTMENT_COLLECTION_ID,
});