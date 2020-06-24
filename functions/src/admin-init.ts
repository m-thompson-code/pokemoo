import * as admin from 'firebase-admin';
// import { envConfig } from './config/config';

export const adminInit = (): void => {
    admin;
    // TODO: setup certs through config
    // admin.initializeApp({
    //     // ServiceAccount has conflicting attributes (project_id vs projectID, etc)
    //     // To get around this, let's cast for now
    //     credential: admin.credential.cert(envConfig.adminCert as admin.ServiceAccount),
    //     // storageBucket: `${envConfig.adminCert.project_id}.appspot.com`,
    // });
}
