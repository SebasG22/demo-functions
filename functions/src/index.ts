import * as functions from 'firebase-functions';

export const addtobigquery = functions.database
  .ref('/cows/{cowId}')
  .onWrite(event => {
    console.log('Trigger', event.after.val());
    // You must return a value, or promise
    /* E.g : Call bigquery to create a new register on specify table
     return table.insert({
       cowID: event.data.val().cowID,
       birthDate: event.data.val().birthDate,
       description: event.data.val().description,
       encodedImage: event.data.val().encodedImage,
       name: event.data.val().name,
       ownerID: event.data.val().ownerID,
       purchaseDate: event.data.val().purchaseDate
        });
*/
    return false;
  });
