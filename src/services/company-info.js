/**
 * Represents company information, including address, phone number, and email.
 */

/**
 * Asynchronously retrieves company information.
 *
 * @returns A promise that resolves to a CompanyInfo object containing address, phone number and email.
 */
export async function getCompanyInfo() {
  // TODO: Implement this by calling an API.

  return {
    address: '123 Main St, Any town, USA',
    phoneNumber: '555-123-4567',
    email: 'info@techinventory.com',
  };
}
