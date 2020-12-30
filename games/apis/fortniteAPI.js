import React from 'react';
import mongoose from 'mongoose';
import fetch from 'node-fetch';

const Schema = mongoose.Schema;

const fortniteSchema = Schema(
    {
        
    }
);
// export const getFortniteData = user =>
//     HTTP.call(
//         'GET',
//         `https://api.fortnitetracker.com/v1/profile/pc/${user}`,
//         {
//             headers: {
//                 'TRN-Api-Key': 'e5c756b6-f460-45e3-9653-d878c0a535dc'
//             }
//         },
//         (error, result) => {
//             if (!error) {
//                 Meteor.users.update(
//                     { _id: 'user' },
//                     { $set: { 'profile.fortnite.data': result.content } },
//                     { upsert: true }
//                 );
//             }
//         }
//     );

export default fortniteSchema;