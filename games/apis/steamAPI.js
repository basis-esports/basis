
// const csGOstatgrab = () => {
//   HTTP.call(
//     'GET',
//     `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=${APIkey}&steamid=${placeHolderId} `,
//     {},
//     (error, result) => {
//       if (!error) {
//         Meteor.call('Meteor.users.GetCSGOStats', result.content);
//       } else {
//         console.log(error);
//       }
//     }
//   );
// };

// export default csGOstatgrab;