import React from 'react';
import mongoose from 'mongoose';
import fetch from 'node-fetch';

const Schema = mongoose.Schema;

const leagueSchema = Schema(
    {
        
    }
);

const apiKey = '<RGAPI_KEY>';

HTTP.call(
    'GET',
    `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${apiKey}`,
    { data: {} },
    (error, result) => {
      if (!error) {
        leagueSchema.update(
          { user: 'static' },
          { $set: { LeagueChampionsStaticList: result } },
          { upsert: true }
        );
      }
    }
  );

export default leagueSchema;