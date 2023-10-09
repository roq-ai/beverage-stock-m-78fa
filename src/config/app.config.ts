interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Depot Supervisor'],
  customerRoles: [],
  tenantRoles: ['Depot Supervisor', 'Bottle Manager', 'Inventory Clerk', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'beverage stock management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage company', 'Edit depot information', 'Supervise depot operations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/386e0cdd-af8d-480a-a637-ae0a18d0646b',
};
