import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process by calling the `signUpUser` and `uploadPhoto` functions.
 * Returns an array of objects with the status and value/error of each promise.
 *
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the photo file to be uploaded.
 * @returns {Promise<Array<{ status: string, value: any }>>} - An array of objects with status
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const userSignupSuccess = results[0].status === 'fulfilled';
    const photoUploadSuccess = results[1].status === 'fulfilled';

    return [
      {
        status: userSignupSuccess ? 'fulfilled' : 'rejected',
        value: photoUploadSuccess ? results[1].value : results[1].reason,
      },
    ];
  });
}
